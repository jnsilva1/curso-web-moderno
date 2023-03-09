select
    *
from
    `estados` e, `cidades` c
WHERE 
    e.id = c.estado_id


select
    e.nome estado,
    c.nome cidade,
    e.regiao
from
    `estados` e, `cidades` c
WHERE 
    e.id = c.estado_id


select
    e.nome estado,
    c.nome cidade,
    e.regiao 'região'
from
    `estados` e
    inner join `cidades` c on e.id = c.estado_id