function result() {
    weight = document.getElementById('weight').value
    height = document.getElementById('height').value
    document.getElementById('result').innerHTML = weight / (height ** 2)
}