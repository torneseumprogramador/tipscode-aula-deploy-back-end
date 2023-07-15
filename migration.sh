#!/bin/bash

# Source env.sh para obter as variáveis de ambiente
source env.sh

# Conecta ao MySQL e cria o banco de dados e a tabela __migrations__ se eles ainda não existirem
mysql -u $MYSQL_USER -p$MYSQL_PASS -e "
CREATE DATABASE IF NOT EXISTS $MYSQL_DATABASE;
USE $MYSQL_DATABASE;
CREATE TABLE IF NOT EXISTS __migrations__ (
    migration VARCHAR(255),
    PRIMARY KEY (migration)
);
"

# Lê todos os arquivos de migração na pasta migrations/
for filename in migrations/*.sql; do
    # Verifica se a migração já foi executada
    migration_exists=$(mysql -u $MYSQL_USER -p$MYSQL_PASS -N -e "USE $MYSQL_DATABASE; SELECT COUNT(*) FROM __migrations__ WHERE migration = '$filename';")

    if [ "$migration_exists" -eq "0" ]
    then
        # Se a migração não foi executada ainda, executa o arquivo SQL
        mysql -u $MYSQL_USER -p$MYSQL_PASS $MYSQL_DATABASE < $filename

        # E então registra na tabela __migrations__
        mysql -u $MYSQL_USER -p$MYSQL_PASS -e "USE $MYSQL_DATABASE; INSERT INTO __migrations__ (migration) VALUES ('$filename');"
    fi
done
