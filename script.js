document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('section#tools ul li').forEach(function (item) {
        item.addEventListener('click', function () {
            alert('تنبيه: استخدم هذه الأدوات فقط بشكل قانوني!');
        });
    });
});