<script>
console.log('haha');
var i = document.createElement('iframe');
i.id = 'me';
i.src = "https://mail.google.com/mail/";

document.body.appendChild(i);

i.addEventListener('load', function() {
	console.log('load');
	console.log(i.contentDocument);
});
</script>
