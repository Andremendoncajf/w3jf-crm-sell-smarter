# Deploy na Hostinger (hospedagem compartilhada)

Este projeto está configurado para gerar um site **estático** que roda em qualquer hospedagem compartilhada da Hostinger (cPanel/Apache), sem necessidade de Node.js no servidor.

## 1. Gerar o build

No seu computador (ou no Lovable, via download do código):

```bash
npm install
npm run build
```

Isso cria a pasta `.output/public/` com todos os arquivos prontos para upload:
- `index.html`
- `assets/` (JS + CSS minificados com hash)
- `logo-w3jf.svg`
- `.htaccess` (regras Apache: SPA fallback, cache, gzip, headers de segurança)

## 2. Enviar para a Hostinger

1. Acesse o **hPanel** → **Gerenciador de Arquivos**.
2. Entre na pasta `public_html` do seu domínio.
3. **Apague** o conteúdo antigo (ex.: `default.php`).
4. Faça upload de **todo o conteúdo** de `.output/public/` para dentro de `public_html`.
   - ⚠️ Envie o **conteúdo** da pasta, não a pasta em si.
   - ⚠️ Garanta que o `.htaccess` foi enviado (ative "mostrar arquivos ocultos" no gerenciador).

Alternativa: compacte `.output/public` em `.zip`, envie e extraia direto no hPanel.

## 3. Configurar domínio e SSL

- Aponte o domínio no **hPanel → Domínios**.
- Ative **SSL gratuito** em **Segurança → SSL**.
- Depois que o SSL estiver ativo, descomente o bloco "Force HTTPS" no `.htaccess`.

## 4. Atualizações futuras

Sempre que mudar o código:

```bash
npm run build
```

E reenvie o conteúdo de `.output/public/` substituindo os arquivos antigos.

## Observações técnicas

- O site é **100% estático** — não há backend rodando na Hostinger.
- O CTA do WhatsApp abre `https://api.whatsapp.com/send?phone=...` em nova aba (não precisa de servidor).
- Funções de servidor (`createServerFn`, rotas `/api/*`) **não funcionam** neste modo de deploy. Se precisar de backend no futuro, será necessário VPS ou serviço externo (ex.: Lovable Cloud).
