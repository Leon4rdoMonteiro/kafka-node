# Micro-serviços com Node.js

- Utilizando Kafka;
- Utilindo Node.js;

## Aplicações

- API principal (Station);
- Geração de certificados;

## Fluxo

- API principal envia uma mensagem para o serviço de certificados para gerar o certificado;
- O Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona);

Se conseguir síncrona/assíncrona:

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;


## O que sabemos?

- REST (latência);
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Paypal, Netflix;


## Para estudar

- Consumer demorado pra subir
- Frameworks específicos para micro-services (Molecular)
- _expectResponse_ (Algo do tipo)
