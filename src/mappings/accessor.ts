import * as schema from "../../generated/schema"

import {
  AccessorAdded as AccessorAddedEvent,
  AccessorRemoved as AccessorRemovedEvent,
  UserIdentityCreated as UserIdentityCreatedEvent
} from "../../generated/Accessor/ZincAccessor"

import { UserIdentity } from "../../generated/Accessor/templates"

export function handleUserIdentityCreated(event: UserIdentityCreatedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.UserIdentityCreated(id)
  entity.userAddress = event.params.userAddress
  entity.identityContractAddress = event.params.identityContractAddress

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()

  // Start processing identity events
  UserIdentity.create(event.params.identityContractAddress)
}

export function handleAccessorAdded(event: AccessorAddedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.AccessorAdded(id)
  entity.identityContractAddress = event.params.identityContractAddress
  entity.keyAddress = event.params.keyAddress
  entity.purpose = event.params.purpose

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleAccessorRemoved(event: AccessorRemovedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.AccessorRemoved(id)
  entity.identityContractAddress = event.params.identityContractAddress
  entity.keyAddress = event.params.keyAddress
  entity.purpose = event.params.purpose

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}
