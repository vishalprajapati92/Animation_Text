var respValue,strSingleChar;
var strLeftStart = 1;
var strRStart = 0;
var strREnd = 1;
var strRightString ="";
var cnt = 0;
var newStringForRight;
var strSingleCharcter = ""; 

function txtLeftSide()
{
    var txtb2Value = document.getElementById('text2').value;
    var txtb1Value = document.getElementById('text1').value;
    var lentxt2 = txtb2Value.length; 
    cnt = lentxt2
    clearInterval(respValue);
    // if(lentxt2 > 0)
    // {
        respValue =  setInterval(function(){
            //  console.log("cnt = "+cnt);
                        if(cnt == 0)
                        {
                            txtStop();
                        }
                        else 
                        {
                            strSingleChar = txtb2Value.charAt(--cnt);
                            txtb1Value = strSingleChar.concat(txtb1Value);
                            txtb2Value = txtb2Value.substr(strRStart,--lentxt2);
                       }
                    document.getElementById('text1').value = txtb1Value;
                    document.getElementById('text2').value = txtb2Value;
        }, 1000);
    // }
}
function txtStop()
{
    clearInterval(respValue);
}

function txtRightSide()
{

    var txtb1Value = document.getElementById('text1').value;
    var txtb2Value = document.getElementById('text2').value;
   
    var strLeftEndPos = txtb1Value.length;
    // console.log("txt1 = "+txtb1Value);
    // if(txtb1Value.length > 0)
    // {
    clearInterval(respValue);
         respValue =  setInterval(function(){
            if(txtb1Value.length == 0)
            {
                txtStop();
            }
            else
            {
                // cnt = 0;
                strSingleChar = txtb1Value.charAt(0);
                txtb2Value = txtb2Value.concat(strSingleChar);
                txtb1Value = txtb1Value.substring(strLeftStart, strLeftEndPos);
                strLeftEndPos = txtb1Value.length;
            } 
            document.getElementById('text1').value = txtb1Value;
            document.getElementById('text2').value = txtb2Value;
        }, 1000);
    // } 
    
   
}

//o/p 
//al vish