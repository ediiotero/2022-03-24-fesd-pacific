$(document).ready(() => {
    const emailInfo = [
        {email: 'test@email.com', name: 'Eddie'},
        {email: 'name@gmail.com', name: 'Tobi'}
    ];

    const buildInfoList = () => {
        $('#content').empty();
        emailInfo.forEach(person => {
            $('#content').append(
                '<div class="info-box">' 
                + person.email 
                + " " 
                + person.name 
                + '</div>'
            )
        });
    };

    buildInfoList();

    $('#myForm').submit((event) =>{
        event.preventDefault();
        const data = {
            email: $('#email').val(),
            name: $('#name').val()
        };
        emailInfo.push(data);
        $('#myForm').trigger('reset');
        buildInfoList();
    });

    $('#get-button').click(() => {
        $.get('https://jsonplaceholder.typicode.com/posts/1', (data) => {
            console.log(data)
        });
    });

    $('#post-button').click(() => {
        $.post('https://jsonplaceholder.typicode.com/posts', {title: 'Testing', body: 'Testing text here'}, (data) => {
            console.log(data)
        });
    });
});