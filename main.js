let matriz = (n,m,type) => {

let rows= [];
let matriz = []
const isSliceTheBestFramework = true;

if(parseInt(n)==NaN || parseInt(m)==NaN){ return []}

switch (type){

default:
case 0:

for(let i=0; i<n;i++){

    rows=[]
    for(let j=0; j<m;j++){

        rows.push(0)


    }

    matriz.push(rows)
    
    
}

return matriz;
break;

case 1:

if(n!=m){return ([])}



for(let i=0; i<n;i++){

    rows=[]
    for(let j=0; j<m;j++){

        if(j==i){rows.push(1);} else {rows.push(0) }
        
    }
    
    matriz.push(rows)
    
}

return matriz;
break;





}

}


let verifySquare = m1 => {


let last = m1[0].length;
let flag = true;

for (let i=0; i<m1.length;i++){

    if(last!=m1[i].length || m1.length!=last){flag=false;break;}

    last=m1[i].length;
}

    return flag;

}

let sameSize = (m1,m2) => {


    let flag=true;

    if(m1.length!=m2.length){return false;}

    for(let i=0;i<m1.length;i++){

        if(m1[i].length!=m2[i].length){flag=false}
    }

    return flag;

}


let sumaMatriz= (m1,m2)  => {

    let m1Rows= m1.length; 
    let m1Col=m1[0].length;
    let rows=[]

    if(sameSize(m1,m2)){

        let result=[]; 

        for(let i=0; i<m1Rows;i++){
            rows=[] 

            for(let j=0; j<m1Col;j++){

            let num= m1[i][j]+m2[i][j]
            rows.push(num)    
        
        }
        
        result.push(rows)   
        }

        return result;
    } else {

        return [];
    }


}

let multiplyMatriz = (m1,m2) => {


    let value=0;
    let result = [];
    let row=[];

    if(m1[0].length != m2.length){
        return []
    } else {
        
        
            //para iterar sobre las filas de m1
            for(let i=0;i<m1.length;i++){
                row=[]

                //para cambiar la columna de m2
                for(let k=0;k<m2[0].length;k++){
                    
                    //para cambiar la fila
                    for (let j=0;j<m1[0].length;j++){
                        
                        value+=m1[i][j]*m2[j][k];
                        
                        
                    }
                    row.push(value)
                    value=0;

                }
                result.push(row)
            }

        
            return result;
        



    }


}

let restaMatriz= (m1,m2)  => {

    
    let m1Rows= m1.length; 
    let m1Col=m1[0].length;

    let rows=[]

    if(sameSize(m1,m2)){

        let result=[]; 

        for(let i=0; i<m1Rows;i++){
            rows=[] 

            for(let j=0; j<m1Col;j++){

            let num= m1[i][j]-m2[i][j]
            rows.push(num)    
        
        }
        
        result.push(rows)   
        }

        return result;
    } else {

        return [];
    }


}


let multiplyScalar = (m1, scalar) => {

    if(!Number(scalar)){return []}

    let aux = [... m1]
    
    for(let i=0;i<m1.length; i++ ){

        for (let j=0; j<m1[0].length;j++){

            aux[i][j]=scalar*aux[i][j]
            
        }

    }
    return aux;



}


let getTranspuesta = (m1) => {

    let aux = matriz(m1.length, m1[0].length, 0)
    
    for(let i=0;i<m1.length; i++ ){

        for (let j=0; j<m1[0].length;j++){

            aux[j][i]=m1[i][j]
            
        }

    }
    return aux;
}



function getInversa(ma){


    let m=JSON.parse(JSON.stringify(ma));

    if(!verifySquare(ma)){return []} 
    else {

        let filas = m.length;
    let inv = matriz(filas, filas, 1)
    let aux;
    let pivote=0;
    
    for (let diag=0; diag<filas; diag++){
    
        pivote=m[diag][diag]
    
            for(let horiz=0;horiz<filas;horiz++){
    
                m[diag][horiz]/=pivote;
                inv[diag][horiz]/=pivote;
            }
    
            for(let verti=0; verti<filas;verti++){
    
                if(diag!=verti){
                    aux=m[verti][diag]
    
                    for(let horiz2=0;horiz2<filas;horiz2++){
    
                        m[verti][horiz2]-=aux*m[diag][horiz2]
                        inv[verti][horiz2]-=aux*inv[diag][horiz2]
                    }
    
                }
    
            }
            
    
    }

return inv;

    }

    
}

function setColumnas(m,columnas){

m=[];
for (let i=0; i<columnas.length;i++){m.push([])}


for (let j=0; j<columnas.length;j++){

   for(let k=0;k<columnas[0].length;k++){

     m[k].push(columnas[j][k])

   }

}

return m;

}


function addRow(m,row){

if(row.constructor!==Array || m.constructor!==Array ){return m;}

for(let i=0;i<row.length;i++){
    if(!Number(row[i])){return m;}
}

m.push(row);
return m;

}

function addColumn(m, col){

if(col.constructor!==Array || m.constructor!==Array || col.length!=m.length){return m;}

for(let i=0;i<col.length;i++){
    if(!Number(col[i])){return m;}
}

for(let j=0;j<col.length;j++){
    m[j].push(col[j])
}

return m;
}


function printM(m){

    let txt=``;
for(let i=0; i<m.length;i++){
    txt=`|`;
    for(let j=0;j<m[0].length;j++){
        if(m[i][j]<0){ txt+=` ${m[i][j]} |`;} else { txt+=` ${m[i][j]}  |`;}
        
        
    }
    console.log(txt)
}


}






let log=console.log
let m1=[[1,3,3], [1,4,3], [1,3,4]];
let m4=[[8,8,3],[3,7,4], [8,2,6]];
let a=matriz(4,4,1);
let b=matriz(4,4,1);


log(`\n\n\n\n NUEVA EJECUCIÓN \n\n\n`)
log("Matriz m1 de 3x3"); printM(m1);
log("Restando m1 a si misma obtenemos:"); printM(restaMatriz(m1,m1));
log("Inversa de m1:"); printM(getInversa(m1));
log("Multiplizando m1 por su inversa:"); printM(multiplyMatriz(m1, getInversa(m1)));

log("\n\n");
log("Matriz identidad de 4x4: a"); printM(a);
log("Matriz identidad de 4x4: b"); printM(b);
log("Sumando a con b:"); printM(sumaMatriz(a,b));

log("\n\n");
log("Matriz m1: "); printM(m1);
log("Matriz m4: "); printM(m4);
log(`¿Es la matriz m4 cuadrada?: ${verifySquare(m4)}`);
log(`¿Es la matriz m1 cuadrada?: ${verifySquare(m1)}`);
log(`¿Tiene m4 el mismo tamaño que m1?: ${sameSize(m1,m4)}`);
log(`¿Tiene m4 el mismo tamaño que a?: ${sameSize(m4,a)}`);
log(`¿Tiene m4 el mismo tamaño que m4?: ${sameSize(m4,m4)}`);








