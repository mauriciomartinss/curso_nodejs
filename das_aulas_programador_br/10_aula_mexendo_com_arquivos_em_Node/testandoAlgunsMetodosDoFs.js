let fs = require('fs'); // por ser um arquivo node, não precisa especificar uma extensão (eh nativo do node para escrever o arquivo)
//acho que o fs seria como o fstream para o c++

fs.writeFile('./createdFiles/teste.txt', 'hello world', (error) => { //writeFile eh um metodo da lib fs, ela apaga tudo que estiver no arquivo, e se o arquivo não existir ela cria.
    if (error) throw error;
    console.log('arquivo criado com sucesso');
});

fs.appendFile('./createdFiles/teste.txt', 'hello world2', (error) => { //o método appendFile vai criar o arquivo se ele ainda não existe e escreverá no arquivo sem apaga o que já existe.
    if (error) throw error;
    console.log('arquivo criado/editado com sucesso'); 
})

fs.rename('./createdFiles/teste.txt', './createdFiles/novonome.txt', (error) => { //renomeia o arquivo
    if (error) { throw error };
    console.log('arquivo renomeado com sucesso'); 
})

fs.readFile('./creeatedFiles/novonome.txt', "UTF8", (error, data) => {
    if(error) { throw error };
    console.log(data); //mostara o conteudo (ta dando erro kkkkk)
    
})