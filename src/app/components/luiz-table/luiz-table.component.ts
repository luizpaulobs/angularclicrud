import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-luiz-table',
	templateUrl: './luiz-table.component.html',
	styleUrls: ['./luiz-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LuizTableComponent implements OnInit {

	public cards = [
		{ title: 'Análise e Desenvolvimento de Sistemas', text: 'No curso, você aprenderá a criar, projetar, analisar, testar, implantar e manter sistemas computacionais de informação, os quais ajudam a tornar as máquinas e os sistemas mais eficientes.', image: '../../assets/analise.jpg' },
		{ title: 'Administração', text: 'Você aprenderá sobre gestão de empresa, organização de processos, planejamentos estratégicos, finanças, marketing, recursos humanos, vendas e inovação em aulas teóricas e práticas, que acontecem por meio de parcerias entre a universidade e empresas, estágios, visitas técnicas e projetos de aprendizado.', image: '../../assets/administracao.jpg' },
		{ title: 'Ciências Contábeis', text: 'Reunindo teoria e prática, você aprenderá tudo sobre economia e finanças de organizações. Legislação, estatística, matemática financeira, gestão e administração são algumas das disciplinas que o prepararão para ser profissional importante para empresas de todos os portes.', image: '../../assets/cienciascontabeis.jpg' },
		{ title: 'Educação Física', text: 'Muito mais do que saber a regra dos esportes ou a montar treinos, você aprenderá como funciona o corpo humano e como a atividade física pode beneficiar a saúde, o bem-estar e a qualidade de vida de todas as pessoas.', image: '../../assets/educacaofisica.jpg' },
		{ title: 'Engenharia da Computação', text: 'Você vai aprender a desenvolver e a implementar hardwares e softwares para dar suporte a empresas de tecnologia, comunicação, entretenimento e demais segmentos. ', image: '../../assets/engenharia.jpg' },
		{ title: 'Gestão Comercial', text: 'Aprenda tudo sobre vendas, definição de estratégias de vendas, rentabilidade dos negócios, ações de ponto de venda, gerenciamento de equipe de vendas, precificação e gestão financeira e orçamentária.', image: '../../assets/comercial.jpg' },
		{ title: 'Gestão de RH', text: 'O curso de Tecnologia em Gestão de Recursos Humanos ensinará você não apenas a recrutar pessoas, mas também a treiná-las, identificando e desenvolvendo seus talentos.', image: '../../assets/rh.jpg' },
		{ title: 'História', text: 'A graduação de História tem como conteúdo muito mais do que o que você já aprendeu na escola. Você vai se aprofundar nos aspectos históricos da nossa sociedade, entendendo como aconteceram os grandes conflitos, as grandes descobertas e até a evolução do ser humano para o que somos hoje.', image: '../../assets/historia.jpg' },
	];

	constructor() { }

	ngOnInit(): void {
	}


}
