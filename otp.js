let value="1234567890"
let pass=""
let generateOtp=(otplength) =>
{
    pass=""
    for(let i=0;i<otplength;i++)
    {
        pass=pass+value.charAt(Math.floor(Math.random()*value.length))
    }
    return pass
}
console.log(generateOtp(6))
let otp=(L) => {
    document.output.box.value=generateOtp(L)
}