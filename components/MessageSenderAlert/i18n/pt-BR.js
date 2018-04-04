'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _messageSenderMessage;

var _messageSenderMessages = require('ringcentral-integration/modules/MessageSender/messageSenderMessages');

var _messageSenderMessages2 = _interopRequireDefault(_messageSenderMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_messageSenderMessage = {}, (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendSuccess, 'Enviado com sucesso.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.sendError, 'Erro ao enviar a mensagem.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.numberValidateError, 'Erro de validação do número de telefone.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textEmpty, 'Insira o texto para envio.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noPermission, 'Você não tem permissão para enviar mensagens.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderEmpty, 'Você deve selecionar um número de telefone para enviar'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientsEmpty, 'Insira um número de recebimento válido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.textTooLong, 'O texto é muito longo. Limitado a 1000'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.multipartTextTooLong, 'O texto é muito longo. Limitado a 5000'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noAreaCode, 'Defina o {areaCodeLink} para usar números de telefone locais de sete dígitos.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.connectFailed, 'Falha de conexão. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internalError, 'Não é possível conectar devido a erros internos. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notAnExtension, 'O número de ramal não existe.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.networkError, 'Não é possível conectar devido a erros de rede. Tente novamente mais tarde.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.senderNumberInvalid, 'Você não tem permissão para enviar mensagens para destinatários de fora da sua organização. Entre em contato com o administrador da conta da RingCentral para fazer o upgrade.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.notSmsToExtension, 'Não é possível enviar para um número de ramal com o número de telefone principal. Se você deseja enviar para um Número de ramal, insira um Número de ramal.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.internationalSMSNotSupported, 'Não há suporte para o envio de SMS para um número de telefone internacional.'), (0, _defineProperty3.default)(_messageSenderMessage, 'areaCode', 'código de área'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.recipientNumberInvalids, 'Insira um número de telefone válido.'), (0, _defineProperty3.default)(_messageSenderMessage, _messageSenderMessages2.default.noInternalSMSPermission, 'Você não tem permissão para enviar mensagens. Entre em contato com o administrador da conta da RingCentral para fazer o upgrade.'), _messageSenderMessage);

// @key: @#@"[messageSenderMessages.sendSuccess]"@#@ @source: @#@"Send Success."@#@
// @key: @#@"[messageSenderMessages.sendError]"@#@ @source: @#@"Something wrong happened when send message."@#@
// @key: @#@"[messageSenderMessages.numberValidateError]"@#@ @source: @#@"Phone Number Validate Error."@#@
// @key: @#@"[messageSenderMessages.textEmpty]"@#@ @source: @#@"Please enter the text to be sent."@#@
// @key: @#@"[messageSenderMessages.noPermission]"@#@ @source: @#@"You have no permission to send message."@#@
// @key: @#@"[messageSenderMessages.senderEmpty]"@#@ @source: @#@"You must select a number from your phone numbers to send"@#@
// @key: @#@"[messageSenderMessages.noToNumber]"@#@ @source: @#@"Invalid phone number."@#@
// @key: @#@"[messageSenderMessages.recipientsEmpty]"@#@ @source: @#@"Please enter a valid receiver number."@#@
// @key: @#@"[messageSenderMessages.textTooLong]"@#@ @source: @#@"Text is too long, 1000 Limited"@#@
// @key: @#@"[messageSenderMessages.multipartTextTooLong]"@#@ @source: @#@"Text is too long, 5000 Limited"@#@
// @key: @#@"[messageSenderMessages.recipientNumberInvalids]"@#@ @source: @#@"Please enter a valid phone number."@#@
// @key: @#@"[messageSenderMessages.noAreaCode]"@#@ @source: @#@"Please set {areaCodeLink} to use 7-digit local phone numbers."@#@
// @key: @#@"[messageSenderMessages.specialNumber]"@#@ @source: @#@"Dialing emergency or special service numbers is not supported."@#@
// @key: @#@"[messageSenderMessages.connectFailed]"@#@ @source: @#@"Connection failed. Please try again later."@#@
// @key: @#@"[messageSenderMessages.internalError]"@#@ @source: @#@"Cannot connect due to internal errors. Please try again later."@#@
// @key: @#@"[messageSenderMessages.notAnExtension]"@#@ @source: @#@"The extension number does not exist."@#@
// @key: @#@"[messageSenderMessages.networkError]"@#@ @source: @#@"Cannot connect due to network issues. Please try again later."@#@
// @key: @#@"[messageSenderMessages.senderNumberInvalid]"@#@ @source: @#@"You don't have permission to send messages to recipients outside of your organization. Please contact your RingCentral account administrator for upgrade."@#@
// @key: @#@"[messageSenderMessages.notSmsToExtension]"@#@ @source: @#@"Cannot send To a extension number with main phone number. If you want to sent to a extension Number, please just enter extension Number."@#@
// @key: @#@"[messageSenderMessages.internationalSMSNotSupported]"@#@ @source: @#@"Sending SMS to international phone number is not supported."@#@
// @key: @#@"[messageSenderMessages.noInternalSMSPermission]"@#@ @source: @#@"You don't have permission to send messages. Please contact your RingCentral account administrator for upgrade."@#@
// @key: @#@"areaCode"@#@ @source: @#@"area code"@#@
//# sourceMappingURL=pt-BR.js.map
