

///Object
const johnArray = [
    'John',
    'Williams',
    2021 - 1996,
    'student',
    ['Mike', 'Jack', 'Peter']
]
console.log(johnArray[0] + ' has ' + johnArray[4].length + ' friends, and his best friends are called ' + johnArray[2, 4]);

const john = {
    firstName: 'John',
    lastName: 'Willams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike', 'Jack', 'Peter'],
    calAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age
    }
    // getSummary: function (john) {

    //     return `${firstName} is a ${this.calAge} and he has a drivers license`
    // }
}
$(document).on('click', '.myBtn', function () {
    var myTargetModal = '#' + $(this).data('bid');
    $('#myModal').hide();
    $('.modal-content').hide();

    $('#myModal').fadeIn();
    $(myTargetModal).fadeIn();
});

$("body").on("click", ".close", function () {
    $('#myModal').hide();
    $('.modal-content').hide();
});
