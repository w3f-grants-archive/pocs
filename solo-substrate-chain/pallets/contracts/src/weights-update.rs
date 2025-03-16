
//! Autogenerated weights for `pallet_contracts`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2025-03-16, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `auguth`, CPU: `AMD Ryzen 7 5700U with Radeon Graphics`
//! EXECUTION: ``, WASM-EXECUTION: `Compiled`, CHAIN: `Some("dev")`, DB CACHE: 1024

// Executed Command:
// ./target/release/pocs
// benchmark
// pallet
// --chain
// dev
// --pallet
// pallet_contracts
// --extrinsic
// update_owner
// --steps
// 50
// --repeat
// 20
// --output
// ./pallets/contracts/src/weights-update.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]

use frame_support::{traits::Get, weights::Weight};
use core::marker::PhantomData;

/// Weight functions for `pallet_contracts`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_contracts::WeightInfo for WeightInfo<T> {
	/// Storage: `Contracts::DelegateInfoMap` (r:1 w:1)
	/// Proof: `Contracts::DelegateInfoMap` (`max_values`: None, `max_size`: Some(108), added: 2583, mode: `Measured`)
	/// Storage: `Contracts::StakeInfoMap` (r:1 w:1)
	/// Proof: `Contracts::StakeInfoMap` (`max_values`: None, `max_size`: Some(64), added: 2539, mode: `Measured`)
	/// Storage: `System::EventTopics` (r:1 w:1)
	/// Proof: `System::EventTopics` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `Staking::Bonded` (r:1 w:0)
	/// Proof: `Staking::Bonded` (`max_values`: None, `max_size`: Some(72), added: 2547, mode: `Measured`)
	fn update_owner() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `933`
		//  Estimated: `4398`
		// Minimum execution time: 87_906_000 picoseconds.
		Weight::from_parts(89_578_000, 0)
			.saturating_add(Weight::from_parts(0, 4398))
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(3))
	}
}
