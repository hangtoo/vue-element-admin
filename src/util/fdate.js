/**
 * Created by CHENKAI on 2018/2/12.
 */
function fdate(time){
    console.log("time=",time);
    var arr1=time.split("-");
    var y=arr1[0];
    var m=arr1[1];
    var arr2=arr1[2].split(" ");
    var d=arr2[0];
    return arr1[0]+'年'+arr1[1]+'月'+arr2[0]+'日'+' '+arr2[1];
}

export { fdate }
