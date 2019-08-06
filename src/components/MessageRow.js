'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { MessageContent, MessageTimestamp, MessageUser, MessageUserAvatar } from './MessageParts'

import '../styles/MessageRow.scss'

function MessageRow ({
  message,
  colorifyUsernames,
  useLargeMessage,
  highlightWords,
  onMessageUserClick,
  ...messageContentProps
}) {
  const isCommand = message.content && message.content.startsWith('/me ')

  const messageTimestamp = <MessageTimestamp message={message} />

  const messageUser = (
    <MessageUser
      message={message}
      colorify={colorifyUsernames}
      isCommand={isCommand}
      onClick={onMessageUserClick}
    />
  )

  const messageContent = (
    <MessageContent
      message={message}
      isCommand={isCommand}
      highlightWords={highlightWords}
      animationProps={{
        transitionName: 'messageAnimation',
        transitionAppear: true,
        transitionEnter: true,
        transitionLeave: false,
        transitionAppearTimeout: 200,
        transitionEnterTimeout: 1000,
        component: 'div',
        className: 'content'
      }}
      {...messageContentProps}
    />
  )

  const content = useLargeMessage ? (
    // Need to wrap elements and change their ordering
    <div className="content-wrapper">
      <div className="Message__Details">
        {messageUser}
        {messageTimestamp}
      </div>
      {messageContent}
    </div>
  ) : (
    <React.Fragment>
      {messageTimestamp}
      {messageUser}
      {messageContent}
    </React.Fragment>
  )

  return (
    <div className={classNames('Message', { unread: message.unread })}>
      {useLargeMessage ? <MessageUserAvatar message={message} /> : null}
      {content}
    </div>
  )
}

MessageRow.propTypes = {
  message: PropTypes.object.isRequired,
  colorifyUsernames: PropTypes.bool,
  useLargeMessage: PropTypes.bool,
  highlightWords: PropTypes.array,
  onMessageUserClick: PropTypes.func,
  loadFile: PropTypes.func.isRequired
}

MessageRow.defaultProps = {
  colorifyUsernames: true,
  useLargeMessage: false,
  highlightWords: []
}

export default MessageRow
