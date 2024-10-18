((m,a,p)=>{
	for (let s of m.getAttribute('imports').split(/,\s*/))a[s]=p+s;
	m.replaceWith(Object.assign(
		document.createElement('script'),
		{type:'importmap',textContent:JSON.stringify({imports:a})}
	))
})(document.currentScript,{},'https://esm.run/')
