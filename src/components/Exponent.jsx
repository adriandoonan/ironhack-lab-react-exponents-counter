const Exponent = ({ num, exponent }) => (
	<div className="exponent-counter-container">
		<p className="exponent-label">
			n<sup>{exponent}</sup>
		</p>
		<p className="exponent-result">
			{`${num}|`
				.repeat(exponent)
				.split("|")
				.filter((a) => a)
				.join(" * ")}{" "}
			= <span className="total">{num ** exponent}</span>
		</p>
	</div>
);

export default Exponent;
