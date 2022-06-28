# Exercícios Reflexivos

#### 1 a)

Salt é uma string aleatória que compõe o hash para evitar ataques rainbow table. Round é o nome dado pela lib ao Cost, que seria o tempo de execução do algoritmo, quanto maior ele for, mais complexo o algoritmo será. Recomenda-se o maior possível para manter a segurança, porém deve-se manter também a performance, então entre 10 e 15 é o recomendado. Usei o valor 12 por ser o valor recomendado pelo curso.

#### 2 a)

Primeiro deve-se modificar o cadastro, para saber qual é a senha que foi cadastrada em plaintext e depois no login criptografando-a.

#### 2 d)

Não, pois este endpoint apenas utiliza do token gerado pelo Login. Este token ainda será gerado no login, independente de qualquer alteração na criptografia de senhas do usuário.