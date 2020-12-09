$(document).ready(function(){
    $("form").submit(function(e){
        if($("#name").val() != "admin" || $("#password").val() != "12345") {
            alert("Wrong username or password!!");
            return false;
        }
    })
    $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
        var list = '';
        $.each(data, function(i, post){
            list += '<tr class="table-light">';
            list += '<td>' + post.userId + '</td>';
            list += '<td>' + post.id + '</td>';
            list += '<td>' + post.title + '</td>';
            if(post.completed == true){
                list += "<td><input type='checkbox'checked disabled='disabled' name='check1'/></td>";
            }
            else{
                list += "<td><input type='checkbox' name='check2'/></td>";
            }
            list += '</tr>';
        });
        $('#table').append(list);
        $("input[name=check2]").change(function(){
            var promise = new Promise(function(resolve,reject){
                if( $("input[name=check2]:checked").length == 5 ){
                    resolve();
                }
                else{
                    reject();
                }
            });
            promise.then(function(){
                $("input[name=check2]").attr('disabled', 'disabled');
                $("input[name=check2]:checked").removeAttr('disabled');
                alert("Congrats. 5 Tasks have been Successfully Completed");
            })
            .catch(function(){
                $("input[name=check2]").removeAttr('disabled');
            })
        })
    })
});
