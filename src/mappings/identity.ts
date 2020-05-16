import * as schema from "../../generated/schema"

import {
  ExecutionFailed as ExecutionFailedEvent,
  KeyAdded as KeyAddedEvent,
  KeyRemoved as KeyRemovedEvent,
  ExecutionRequested as ExecutionRequestedEvent,
  Executed as ExecutedEvent,
  Approved as ApprovedEvent
} from "../../generated/templates/UserIdentity/Identity"

export function handleExecutionFailed(event: ExecutionFailedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.ExecutionFailed(id)
  entity.executionId = event.params.executionId
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleKeyAdded(event: KeyAddedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.KeyAdded(id)
  entity.key = event.params.key
  entity.purpose = event.params.purpose
  entity.keyType = event.params.keyType

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleKeyRemoved(event: KeyRemovedEvent): void {
  let entity = new schema.KeyRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.key = event.params.key
  entity.purpose = event.params.purpose
  entity.keyType = event.params.keyType

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleExecutionRequested(event: ExecutionRequestedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.ExecutionRequested(id)
  entity.executionId = event.params.executionId
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleExecuted(event: ExecutedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.Executed(id)
  entity.executionId = event.params.executionId
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}

export function handleApproved(event: ApprovedEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()

  let entity = new schema.Approved(id)

  entity.executionId = event.params.executionId
  entity.approved = event.params.approved

  entity.block = event.block.number
  entity.transaction = event.transaction.hash
  entity.timestamp = event.block.timestamp

  entity.save()
}
