DROP DATABASE IF EXISTS `SIGAEC_APP`;

CREATE DATABASE `SIGAEC_APP`;

USE `SIGAEC_APP`;

CREATE TABLE `EventoAcademicoTipo` (
  `eventoAcademicoTipoId` integer AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(20) NOT NULL
);

CREATE TABLE `PublicacaoAcademica` (
  `publicacaoAcademicaId` int AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(100),
  `descricao` varchar(500)
);

CREATE TABLE `AreaConhecimento` (
  `areaConhecimentoId` int AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(25),
  `descricao` varchar(150)
);

CREATE TABLE `TipoTrabalhoAcademico` (
  `tipoTrabalhoAcademicoId` int AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(15) NOT NULL,
  `descricao` varchar(300)
);

CREATE TABLE `EventoCronograma` (
  `eventoCronogramaId` int AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(80) NOT NULL,
  `descricao` varchar(200),
  `inicio` date NOT NULL,
  `termino` date NOT NULL
);

CREATE TABLE `Instituicao` (
  `instituicaoId` int AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(40) ,
  `sigla` varchar(10)
);

CREATE TABLE `PapelNaEquipe` (
  `papelNaEquipeId` integer AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(30),
  `descricao` varchar(100)
);

CREATE TABLE `Endereco` (
  `enderecoId` integer AUTO_INCREMENT PRIMARY KEY,
  `logradouro` varchar(40),
  `bairro`  varchar(40),
  `numero` smallint,
  `CEP` varchar(8)
);

CREATE TABLE `Cadastro` (
  `cadastroId` int AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(25) NOT NULL,
  `sobrenome` varchar(60),
  `email` varchar(30) NOT NULL,
  `facebook` varchar(60),
  `orchid` varchar(60),
  `lattes` varchar(60),
  `enderecoId` int,
  `instituicaoId` int,
   FOREIGN KEY(enderecoId) REFERENCES Endereco(enderecoId) ON DELETE CASCADE,
   FOREIGN KEY(instituicaoId) REFERENCES Instituicao(instituicaoId) ON DELETE CASCADE
);

CREATE TABLE `StatusRevisao` (
  `statusRevisaoId` int AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(20),
  `descricao` varchar(100)
);

CREATE TABLE `Editor` (
  `cadastroId` int PRIMARY KEY,
  `parecer` varchar(100),
  FOREIGN KEY(cadastroId) REFERENCES Cadastro(cadastroId) ON DELETE CASCADE
);

CREATE TABLE `RevistaAcademica` (
  `publicacaoAcademicaId` int,
  `editorChefeId` int,
  FOREIGN KEY(publicacaoAcademicaId) REFERENCES PublicacaoAcademica(publicacaoAcademicaId) ON DELETE CASCADE,
  FOREIGN KEY(editorChefeId) REFERENCES Editor(cadastroId) ON DELETE CASCADE
);

CREATE TABLE `MembroDeEquipe` (
  `cadastroId` int,
  `papelNaEquipeId` int,
   PRIMARY KEY(cadastroId, papelNaEquipeId),
   FOREIGN KEY(cadastroId) REFERENCES Cadastro(cadastroId) ON DELETE CASCADE,
   FOREIGN KEY(papelNaEquipeId) REFERENCES PapelNaEquipe(papelNaEquipeId) ON DELETE CASCADE
);

CREATE TABLE `EventoAcademico` (
  `publicacaoAcademicaId` integer PRIMARY KEY,
  `inicio` date NOT NULL,
  `termino` date NOT NULL,
  `enderecoId`  integer NOT NULL,
   FOREIGN KEY(publicacaoAcademicaId) REFERENCES PublicacaoAcademica(publicacaoAcademicaId) ON DELETE CASCADE,
   FOREIGN KEY(enderecoId) REFERENCES Endereco(enderecoId) ON DELETE CASCADE
);

CREATE TABLE `OrganizacaoEventoAcademico` (
  `publicacaoAcademicaId` int,
  `cadastroId` int,
  PRIMARY KEY(publicacaoAcademicaId, cadastroId),
  FOREIGN KEY(publicacaoAcademicaId) REFERENCES EventoAcademico(publicacaoAcademicaId) ON DELETE CASCADE,
  FOREIGN KEY(cadastroId) REFERENCES MembroDeEquipe(cadastroId) ON DELETE CASCADE
);

CREATE TABLE `EventoAcademicoEventoCronogramaRelacao` (
  `publicacaoAcademicaId` int,
  `eventoCronogramaId` int,
   PRIMARY KEY(publicacaoAcademicaId, eventoCronogramaId),
   FOREIGN KEY(publicacaoAcademicaId) REFERENCES EventoAcademico(publicacaoAcademicaId) ON DELETE CASCADE,
   FOREIGN KEY(eventoCronogramaId) REFERENCES EventoCronograma(eventoCronogramaId) ON DELETE CASCADE
);

CREATE TABLE `EditorDeArea` (
  `cadastroId` int,
  `areaConhecimentoId` int,
  PRIMARY KEY(`cadastroId`,  `areaConhecimentoId`),
  FOREIGN KEY(cadastroId) REFERENCES Cadastro(cadastroId) ON DELETE CASCADE,
  FOREIGN KEY(areaConhecimentoId) REFERENCES AreaConhecimento(areaConhecimentoId) ON DELETE CASCADE
);

CREATE TABLE `RevistaAcademicaEditorDeAreaRelacao` (
  `publicacaoAcademicaId` int,
  `cadastroId` int,
   PRIMARY KEY(publicacaoAcademicaId, cadastroId),
   FOREIGN KEY(publicacaoAcademicaId) REFERENCES RevistaAcademica(publicacaoAcademicaId) ON DELETE CASCADE,
   FOREIGN KEY(cadastroId) REFERENCES EditorDeArea(cadastroId) ON DELETE CASCADE
);

CREATE TABLE `TrabalhoAcademico` (
  `trabalhoAcademicoId` int AUTO_INCREMENT,
  `publicacaoAcademicaId` int NOT NULL,
  `titulo` varchar(150),
  `resumo` varchar(500),
  `palavrastrabalhoacademicochave` varchar(150),
  `arquivo` blob,
  `dataSubmissao` date,
  `autorPrincipalId` int,
  `tipoTrabalhoAcademicoId` int,
  `statusRevisaoId` int,
  `areaConhecimentoId` int,
   PRIMARY KEY(trabalhoAcademicoId, publicacaoAcademicaId),
   FOREIGN KEY(publicacaoAcademicaId) REFERENCES PublicacaoAcademica(publicacaoAcademicaId) ON DELETE CASCADE,
   FOREIGN KEY(tipoTrabalhoAcademicoId) REFERENCES TipoTrabalhoAcademico(tipoTrabalhoAcademicoId) ON DELETE CASCADE,
   FOREIGN KEY(statusRevisaoId) REFERENCES StatusRevisao(statusRevisaoId) ON DELETE CASCADE,
   FOREIGN KEY(areaConhecimentoId) REFERENCES AreaConhecimento(areaConhecimentoId) ON DELETE CASCADE
);

CREATE TABLE `Autor` (
  `cadastroId` int,
  `trabalhoAcademicoId` int,
  PRIMARY KEY(cadastroId, trabalhoAcademicoId),
  FOREIGN KEY(cadastroId) REFERENCES Cadastro(cadastroId) ON DELETE CASCADE,
  FOREIGN KEY(trabalhoAcademicoId) REFERENCES TrabalhoAcademico(trabalhoAcademicoId) ON DELETE CASCADE
);

ALTER TABLE `TrabalhoAcademico` ADD
   FOREIGN KEY(autorPrincipalId) REFERENCES Autor(cadastroId) ON DELETE CASCADE ;

CREATE TABLE `AutorPublicacaoAcademicaRelacao` (
  `cadastroId` int,
  `publicacaoAcademicaId` int,
  PRIMARY KEY(cadastroID, publicacaoAcademicaId),
  FOREIGN KEY(cadastroId) REFERENCES Autor(cadastroId) ON DELETE CASCADE,
  FOREIGN KEY(publicacaoAcademicaId) REFERENCES PublicacaoAcademica(publicacaoAcademicaId) ON DELETE CASCADE
);

CREATE TABLE `RevisorTrabalhoAcademicoRelacao` (
  `cadastroId` int,
  `trabalhoAcademicoId` int,
  `comentariosRevisor` varchar(500),
  `aprovaPublicacao` boolean,
  PRIMARY KEY(`cadastroId`,  `trabalhoAcademicoId`),
  FOREIGN KEY(cadastroId) REFERENCES Cadastro(cadastroId) ON DELETE CASCADE,
  FOREIGN KEY(trabalhoAcademicoId) REFERENCES TrabalhoAcademico(trabalhoAcademicoId) ON DELETE CASCADE
);

CREATE TABLE `AutorDeEvento` (
  `cadastroId` integer PRIMARY KEY,
  `envios_maximo` smallint,
   FOREIGN KEY(cadastroId) REFERENCES Cadastro(cadastroId) ON DELETE CASCADE
);

CREATE TABLE `EventoAcademicoEventoAcademicoTipoRelacao` (
  `publicacaoAcademicaId` integer,
  `eventoAcademicoTipoId` integer,
  PRIMARY KEY(`publicacaoAcademicaId`,  `eventoAcademicoTipoId`),
  FOREIGN KEY(publicacaoAcademicaId) REFERENCES EventoAcademico(publicacaoAcademicaId) ON DELETE CASCADE,
  FOREIGN KEY(eventoAcademicoTipoId) REFERENCES EventoAcademicoTipo(eventoAcademicoTipoId) ON DELETE CASCADE
);

CREATE TABLE `Revisor` (
  `cadastroId` integer PRIMARY KEY,
  FOREIGN KEY(`cadastroId`) REFERENCES Cadastro(`cadastroId`) ON DELETE CASCADE
);

CREATE TABLE `TrabalhoAcademicoAreaConhecimentoRelacao` (
  `trabalhoAcademicoId` integer,
  `areaConhecimentoId` integer,
  PRIMARY KEY(`trabalhoAcademicoId`,  `areaConhecimentoId`),
  FOREIGN KEY(trabalhoAcademicoId) REFERENCES TrabalhoAcademico(trabalhoAcademicoId) ON DELETE CASCADE,
  FOREIGN KEY(areaConhecimentoId) REFERENCES AreaConhecimento(areaConhecimentoId) ON DELETE CASCADE
);

CREATE TABLE `PublicacaoAcademicoAreaConhecimentoRelacao` (
  `publicacaoAcademicaId` int,
  `areaConhecimentoId` int,
  PRIMARY KEY(`publicacaoAcademicaId`,  `areaConhecimentoId`),
  FOREIGN KEY(publicacaoAcademicaId) REFERENCES PublicacaoAcademica(publicacaoAcademicaId) ON DELETE CASCADE,
  FOREIGN KEY(areaConhecimentoId) REFERENCES AreaConhecimento(areaConhecimentoId) ON DELETE CASCADE
);

CREATE TABLE `RevisorPublicacaoAcademicaRelacao` (
  `cadastroId` int,
  `publicacaoAcademicaId` int,
  PRIMARY KEY(`cadastroId`,  `publicacaoAcademicaId`),
  FOREIGN KEY(cadastroId) REFERENCES Revisor(cadastroId) ON DELETE CASCADE,
  FOREIGN KEY(publicacaoAcademicaId) REFERENCES PublicacaoAcademica(publicacaoAcademicaId) ON DELETE CASCADE
);

CREATE TABLE `AutorRevistaAcademicaRelacao` (
  `trabalhoAcademicoId` int,
  `cadastroId` int,
  PRIMARY KEY(`trabalhoAcademicoId`,  `cadastroId`),
  FOREIGN KEY(trabalhoAcademicoId) REFERENCES TrabalhoAcademico(trabalhoAcademicoId) ON DELETE CASCADE,
  FOREIGN KEY(cadastroId) REFERENCES Cadastro(cadastroId) ON DELETE CASCADE
);