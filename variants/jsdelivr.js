((m,a,p)=>{
	for (let s of m.getAttribute('imports').split(/,\s*/))
	{let[o,...k]=s.split('!');a[o]=p+o+k.join('!')}
	m.replaceWith(Object.assign(
		document.createElement('script'),
		{type:'importmap',textContent:JSON.stringify({imports:a})}
	))
})(document.currentScript,{},'https://cdn.jsdelivr.net/npm/')
