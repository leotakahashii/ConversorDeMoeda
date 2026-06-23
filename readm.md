# Conversor de Moedas

Aplicação web para conversão de valores em Real Brasileiro (BRL) para outras moedas, desenvolvida com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas.

---

## Funcionalidades

- Conversão de Real Brasileiro para:
  - Dólar Americano (USD)
  - Euro (EUR)
  - Libra Esterlina (GBP)
  - Bitcoin (BTC)
- Formatação de valores no padrão de cada moeda usando a API nativa `Intl.NumberFormat`
- Suporte ao formato numérico brasileiro (ex: `10.000,00`)
- Atualização automática do nome e ícone da moeda ao trocar o seletor

---

## Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e semântica da página |
| CSS3 | Estilização e layout responsivo |
| JavaScript (ES6+) | Lógica de conversão e manipulação do DOM |
| Intl.NumberFormat | Formatação de valores monetários por localidade |
| Google Fonts | Tipografia (Open Sans) |

---

## Como usar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador
3. Selecione a moeda de destino no campo **Converter para**
4. Digite o valor em Reais no campo **Valor**
5. Clique em **Converter**

> Não é necessário instalar nada — a aplicação roda diretamente no navegador.

---

## Estrutura de arquivos

```
conversor-de-moedas/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── logo.jpg
    ├── brazilian-real.png
    ├── dollar.png
    ├── euro.png
    ├── libra.png
    ├── bitcoin.png
    └── down-arrow.png
```

---

## Aprendizados do projeto

- Manipulação do DOM com `querySelector` e `getElementById`
- Tratamento de entrada de dados no formato brasileiro (substituição de `.` e `,`)
- Uso da API `Intl.NumberFormat` para formatação internacionalizada
- Depuração de bugs relacionados a seletores CSS, typos em variáveis e conversão de tipos
- Boas práticas de organização de código JavaScript

---

## Cotações utilizadas

As cotações são fixas e definidas diretamente no código. Para um projeto futuro, é possível integrá-las a uma API de câmbio em tempo real.

| Moeda | Cotação (referência) |
|---|---|
| Dólar (USD) | R$ 5,20 |
| Euro (EUR) | R$ 6,30 |
| Libra (GBP) | R$ 6,80 |
| Bitcoin (BTC) | R$ 334,40 |

---

## Autor

Desenvolvido por **Leo**