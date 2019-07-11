import * as schema from "../../generated/schema"

import {
  ClaimRemoved as ClaimRemovedEvent,
  ClaimSet as ClaimSetEvent,
  OwnershipRenounced as OwnershipRenouncedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../../generated/Registry/Registry"

export function handleClaimSet(event: ClaimSetEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.ClaimSet(id)
  entity.subject = event.params.subject
  entity.issuer = event.params.issuer
  entity.claimId = event.params.id
  entity.key = event.params.key
  entity.data = event.params.data
  entity.updatedAt = event.params.updatedAt

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleClaimRemoved(event: ClaimRemovedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.ClaimRemoved(id)
  entity.subject = event.params.subject
  entity.issuer = event.params.issuer
  entity.claimId = event.params.id
  entity.key = event.params.key
  entity.removedAt = event.params.removedAt

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleOwnershipRenounced(event: OwnershipRenouncedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.OwnershipRenounced(id)
  entity.previousOwner = event.params.previousOwner

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.OwnershipTransferred(id)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}
