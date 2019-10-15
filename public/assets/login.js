$(document).ready(function(){
    
    $('form').on('submit', function(){
            $.ajax({
                type: 'POST',
                url: '/index',
                success: function(){
                    //do something with the data via front-end framwork
                    location.replace('/todo');
                }
            });

            return false;
    });
});