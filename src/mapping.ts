import {
  ClaimSet as ClaimSetEvent,
  ClaimRemoved as ClaimRemovedEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/Contract/Contract"

import {
  ClaimSet,
  ClaimRemoved,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/schema"

export function handleClaimSet(event: ClaimSetEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new ClaimSet(id)
  entity.subject = event.params.subject
  entity.issuer = event.params.issuer
  entity.claimId = event.params.id
  entity.key = event.params.key
  entity.data = event.params.data
  entity.updatedAt = event.params.updatedAt

  entity.block = event.block.number
  entity.transaction = event.transaction.hash

  entity.save()
}

export function handleClaimRemoved(event: ClaimRemovedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new ClaimRemoved(id)
  entity.subject = event.params.subject
  entity.issuer = event.params.issuer
  entity.claimId = event.params.id
  entity.key = event.params.key
  entity.removedAt = event.params.removedAt

  entity.block = event.block.number
  entity.transaction = event.transaction.hash

  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new OwnershipRenounced(id)
  entity.previousOwner = event.params.previousOwner

  entity.block = event.block.number
  entity.transaction = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new OwnershipTransferred(id)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.block = event.block.number
  entity.transaction = event.transaction.hash

  entity.save()
}
