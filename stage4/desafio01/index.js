let num1;
let num2;

requestEntry = {
  firstEntry: function () {
    return prompt('Insira um número')
  },

  invalidEntry: function () {
    alert('Valor inserido é inválido, insira um número')
    this.firstEntry()
  },

  nullEntry: function () {
    alert('Um número é obrigatório')
    this.firstEntry()
  },
}

handleEntry = (entry) => {
  return !!entry ? Number.isNaN(Number(entry)) == false ? Number(entry) : requestEntry.invalidEntry() : requestEntry.nullEntry()
}

function calcs(num1, num2) {
  sum = num1 + num2
  sub = num1 - num2
  multi = num1 * num2
  div = num2 != 0 ? num1 / num2 : 'inválido, não é possível dividir por 0'
  remain = num1 % num2
  isEven = (num1 + num2) % 2 == 0 ? 'par' : 'ímpar'
  isDiff = num1 == num2 ? 'iguais' : 'diferentes'

  return { sum, sub, multi, div, remain, isEven, isDiff }
}

function alerts(alerts) {
  const { sum, sub, multi, div, remain, isEven, isDiff } = alerts
  alert(`       Os números digitados foram ${num1} e ${num2},
  A soma dos números é ${sum},
  A subtração dos números é ${sub},
  A multiplicação dos números é ${multi},
  A divisão dos números é ${div},
  O resto da divisão entre os números é ${remain},
  A soma dos números é ${isEven},
  Os números são ${isDiff}.`)
}

num1 = handleEntry(requestEntry.firstEntry())
num2 = handleEntry(requestEntry.firstEntry())

alerts(calcs(num1, num2))