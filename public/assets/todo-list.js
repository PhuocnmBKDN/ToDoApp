$(document).ready(function(){
    
            $('form').on('submit', function(){

                    var item = $('form input');
                    var task = {item: item.val()};

                    $.ajax({
                        type: 'POST',
                        url: '/todo',
                        data: task,
                        success: function(data){
                            //do something with the data via front-end framwork
                            location.reload();
                        }
                    });

                    return false;
            });

            $('li').on('click', function(){
                var item = $(this).text().replace(/ /g, "-");
                $.ajax({
                    type: 'DELETE',
                    url: '/todo/' + item,
                    success: function(data){
                        //do something with the data via front0end framework
                        location.reload();
                    }
                });
            });

            $("button.sign_out").click(function(){
                location.replace("/index");
            });
});