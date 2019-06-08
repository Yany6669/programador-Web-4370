var pass = prompt('Ingrese pass')

// mientras pass sea vacio  ==='', tengo que pedir el password de vuelta
while (pass === '' || pass === '1234') {
  pass = prompt('Ingrese pass')
}
