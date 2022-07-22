# Exercício Reflexivo
## Exercício 3
### c)

A diferença é que em um a função de ataque está chamando diretamente a função de validação de personagem, 
tornando sua implementação de alto acoplamento. Na segunda ocorre a inversão, logo a chamada da função de
validação não depende mais da função de ataque, mas sim de quem for chamá-la.

## Exercício 4

### a)

Para a função performAttack, pois esta é quem irá receber a função de validação e deve retornar um valor
para que o ataque ocorra em caso de o personagem seja válido ou não ocorra caso o personagem seja inválido.

