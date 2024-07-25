$(document).ready(function(){
	$(".init-tour").click(function () {
		var enjoyhint_instance = new EnjoyHint({
			onSkip: function () {
				$("#passo1").css('display', 'none');
				$("#passo2").css('display', 'none');
				$("#passo3").css('display', 'none');
				$("#passo4").css('display', 'none');
				$("#passo5").css('display', 'none');
				$("#passo6").css('display', 'none');
				$("#passo7").css('display', 'none');
			}
		});

		var enjoyhint_script_steps = [
			{
				"nextButton": {className: "myNext1", text: "Próximo"},
				"skipButton": {className: "mySkip1", text: "Pular"},
				'next .nova-forma-acesso': "Agora, o acesso ao sistema será feito através do Login Único do Governo Federal. Clique em 'Entrar com gov.br' e você será redirecionado para a página do ACESSO.GOV.BR para realizar seu cadastro e login."
			},
			{
				"nextButton": {className: "myNext2", text: "Próximo"},
				"skipButton": {className: "mySkip2", text: "Pular"},
				'next #passo1': 'Caso ainda não tenha uma conta, clique em "Crie sua conta gov.br" e prossiga com os passos para realizar o cadastro.',
				onBeforeStart: function () {
					$("#passo1").css('display', 'block');
				}
			},
			{
				"nextButton": {className: "myNext3", text: "Próximo"},
				"skipButton": {className: "mySkip3", text: "Pular"},
				'next #passo2': 'Se já possuir uma conta, informe o número do CPF e clique em "Avançar".',
				onBeforeStart: function () {
					$("#passo1").css('display', 'none');
					$("#passo2").css('display', 'block');
				}
			},
			{
				"nextButton": {className: "myNext4", text: "Próximo"},
				"skipButton": {className: "mySkip4", text: "Pular"},
				'next #passo3': 'Informe sua senha e clique em "Entrar". As dúvidas podem ser tiradas em "Dúvidas Frequentes".',
				onBeforeStart: function () {
					$("#passo2").css('display', 'none');
					$("#passo3").css('display', 'block');
				}
			},
			{
				"nextButton": {className: "myNext5", text: "Próximo"},
				"skipButton": {className: "mySkip5", text: "Pular"},
				'next #passo4': 'Outras formas de acesso estão disponíveis; você pode utiliza-las também, caso prefira.',
				onBeforeStart: function () {
					$("#passo3").css('display', 'none');
					$("#passo4").css('display', 'block');
				}
			},
			{
				"nextButton": {className: "myNext6", text: "Próximo"},
				"skipButton": {className: "mySkip6", text: "Pular"},
				'next #passo5': 'Na primeira vez que entrar no sistema com o Login Único, poderá ser solicitado a atualização dos dados cadastrais junto ao GOV.BR',
				onBeforeStart: function () {
					$("#passo4").css('display', 'none');
					$("#passo5").css('display', 'block');
				}
			},
			{
				"nextButton": {className: "myNext7", text: "Próximo"},
				"skipButton": {className: "mySkip7", text: "Pular"},
				'next #passo6': 'Valide o código de confirmação enviado',
				onBeforeStart: function () {
					$("#passo5").css('display', 'none');
					$("#passo6").css('display', 'block');
				}
			},
			{
				"nextButton": {className: "myNext8", text: "Próximo"},
				"skipButton": {className: "mySkip8", text: "Pular"},
				'next #passo7': 'Uma solicitação de Autorização de uso de dados pessoais será apresentada. Clique em: "Autorizar". Essa configuração poderá ser modificada posteriormente no seu perfil do GOV.BR',
				onBeforeStart: function () {
					$("#passo6").css('display', 'none');
					$("#passo7").css('display', 'block');
				}
			},
			{
				showNext: false,
				"skipButton": {className: "mySkip9", text: "Finalizar"},
				'event .btn-entrar': 'Não se preocupe, não perdemos seus dados. ' +
				'Após o login, é possível atualizar as informações do usuário.',
				onBeforeStart: function () {
					$("#passo7").css('display', 'none');
				}
			}
		];

		//set script config
		enjoyhint_instance.set(enjoyhint_script_steps);

		//run Enjoyhint script
		enjoyhint_instance.run();
	});
});