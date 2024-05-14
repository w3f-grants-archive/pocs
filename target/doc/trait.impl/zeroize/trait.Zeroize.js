(function() {var implementors = {
"bip39":[["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"bip39/struct.Seed.html\" title=\"struct bip39::Seed\">Seed</a>"]],
"crypto_bigint":[["impl&lt;const LIMBS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"crypto_bigint/modular/runtime_mod/struct.DynResidue.html\" title=\"struct crypto_bigint::modular::runtime_mod::DynResidue\">DynResidue</a>&lt;LIMBS&gt;"]],
"curve25519_dalek":[["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"curve25519_dalek/edwards/struct.EdwardsPoint.html\" title=\"struct curve25519_dalek::edwards::EdwardsPoint\">EdwardsPoint</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"curve25519_dalek/edwards/struct.CompressedEdwardsY.html\" title=\"struct curve25519_dalek::edwards::CompressedEdwardsY\">CompressedEdwardsY</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"curve25519_dalek/montgomery/struct.MontgomeryPoint.html\" title=\"struct curve25519_dalek::montgomery::MontgomeryPoint\">MontgomeryPoint</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.CompressedRistretto.html\" title=\"struct curve25519_dalek::ristretto::CompressedRistretto\">CompressedRistretto</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"curve25519_dalek/scalar/struct.Scalar.html\" title=\"struct curve25519_dalek::scalar::Scalar\">Scalar</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"curve25519_dalek/ristretto/struct.RistrettoPoint.html\" title=\"struct curve25519_dalek::ristretto::RistrettoPoint\">RistrettoPoint</a>"]],
"ed25519_dalek":[["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"ed25519_dalek/struct.ExpandedSecretKey.html\" title=\"struct ed25519_dalek::ExpandedSecretKey\">ExpandedSecretKey</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"ed25519_dalek/struct.SecretKey.html\" title=\"struct ed25519_dalek::SecretKey\">SecretKey</a>"]],
"ed25519_zebra":[["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"ed25519_zebra/struct.SigningKey.html\" title=\"struct ed25519_zebra::SigningKey\">SigningKey</a>"]],
"elliptic_curve":[["impl&lt;C&gt; <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"elliptic_curve/scalar/struct.NonZeroScalar.html\" title=\"struct elliptic_curve::scalar::NonZeroScalar\">NonZeroScalar</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"elliptic_curve/trait.CurveArithmetic.html\" title=\"trait elliptic_curve::CurveArithmetic\">CurveArithmetic</a>,</div>"]],
"generic_array":[["impl&lt;T: <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a>, N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt;"]],
"merlin":[["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"merlin/struct.Transcript.html\" title=\"struct merlin::Transcript\">Transcript</a>"]],
"schnorrkel":[["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"schnorrkel/keys/struct.Keypair.html\" title=\"struct schnorrkel::keys::Keypair\">Keypair</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"schnorrkel/keys/struct.SecretKey.html\" title=\"struct schnorrkel::keys::SecretKey\">SecretKey</a>"],["impl <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"schnorrkel/keys/struct.MiniSecretKey.html\" title=\"struct schnorrkel::keys::MiniSecretKey\">MiniSecretKey</a>"]],
"sec1":[["impl&lt;Size&gt; <a class=\"trait\" href=\"zeroize/trait.Zeroize.html\" title=\"trait zeroize::Zeroize\">Zeroize</a> for <a class=\"struct\" href=\"sec1/point/struct.EncodedPoint.html\" title=\"struct sec1::point::EncodedPoint\">EncodedPoint</a>&lt;Size&gt;<div class=\"where\">where\n    Size: <a class=\"trait\" href=\"sec1/point/trait.ModulusSize.html\" title=\"trait sec1::point::ModulusSize\">ModulusSize</a>,</div>"]],
"secrecy":[],
"sp_core":[],
"zeroize":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()