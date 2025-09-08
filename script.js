let text=document.getElementById("text");
let length=document.getElementById("length");
let btn=document.getElementById("btn");
let output1=document.getElementById("output1")
let output2=document.getElementById("output2")
let output3=document.getElementById("output3")
let output4=document.getElementById("output4")
let output5=document.getElementById("output5")
let output6=document.getElementById("output6")
let output7=document.getElementById("output7")
let output8=document.getElementById("output8")

btn.addEventListener("click",function(){
    let str=text.value;
    let len=str.length;
    output1.textContent=len;

    let uppercase=str.toUpperCase();
    output2.textContent=uppercase;

    let lowercase=str.toLowerCase();
    output3.textContent=lowercase;





    let mid =len/2;
    let temp2=str;
    let j=0;
    while((temp2.length)>=j)
    {
        if(temp2[j]!=" ")
        {
            if((len%2)==0)
            {
                output4.textContent=temp2.charAt(mid-1)+temp2.charAt(mid);
            }
            else
            {
                output4.textContent=temp2.charAt(mid);
            }
        }
        else{
            temp2="NA";
            output4.textContent=temp2;
            break;
        }
        j++;
    }



    let i=0;
    let word=0;
    let temp=0;
    let vowel=0;
    let consonants=0;
    let camel=str;
    console.log(str.charAt(0));
    while(i<=len)
    {
        if(camel.charAt(i)==" ")
        {
            word++;
            temp=0;
            camel = camel.substring(0, i)+camel.charAt(i+1).toUpperCase()+ camel.substring(i+2);

        }
        
        else
        {
            temp++;
            if(str.charAt(i)>="a"&& str.charAt(i)<="z"||str.charAt(i)>="A"&& str.charAt(i)<="Z")
            {
                if(str.charAt(i) === "a" ||str.charAt(i) === "e" ||str.charAt(i) === "i" ||str.charAt(i) === "o" ||str.charAt(i) === "u")
                {
                    vowel++;
                }
                
                else{
                    consonants++;
                }
            }
        }
        i++;
    }
    if(temp>0)
    {
        word++;
    }
    output5.textContent=word;
    output6.textContent=vowel;
    output7.textContent=consonants;
    output8.textContent=camel;


})


