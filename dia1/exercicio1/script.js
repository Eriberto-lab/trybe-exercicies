
const nameAndEmail = (name) => {
    // let objt = {nomeCompleto: name, email:''};
    return `${name.replace(' ', name)}`

}

// console.log(nameAndEmail('Guerra'))

const newEmployees = (callback) => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }    
    employees.id1[0] = callback('Pedro Guerra');

     console.log(callback)

    return employees;
  };

  console.log(newEmployees(nameAndEmail))