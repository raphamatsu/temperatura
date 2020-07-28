function calcular(temp) {
    temp = document.getElementById("celsius").value
    temp = ((temp * (9/5)) + 32)
    document.getElementById("fahr").value = `${temp}`
}
