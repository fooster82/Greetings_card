document.querySelectorAll('#greetingscard input')
Array.from(document.querySelectorAll('#greetingscard input')).reduce((acc, input) => ({ ...acc,[input.id]: input.value }), {});