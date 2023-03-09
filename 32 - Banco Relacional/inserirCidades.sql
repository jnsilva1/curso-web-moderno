
insert INTO `cidades` (nome, area, estado_id)
values ('Campinas', 795, 26);


insert INTO `cidades` (nome, area, estado_id)
values ('Niterói',133.9, (select id from `estados` where sigla = 'RJ'));


insert INTO `cidades` (nome, area, estado_id)
values ('Caruaru',920.6, (select id from `estados` where sigla = 'PE'));


insert INTO `cidades` (nome, area, estado_id)
values ('Juazeiro do Norte',248.2, (select id from `estados` where sigla = 'CE'));

SELECT * FROM `cidades`