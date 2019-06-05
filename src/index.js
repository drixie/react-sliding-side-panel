import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './sliding_panel.min.css';

const getPanelGlassStyle = (type, size) => {
  const horizontal = type === 'bottom' || type === 'top';
  return {
    width: horizontal ? '100vw' : `${100 - size}vw`,
    height: horizontal ? `${100 - size}vh` : '100vh',
    ...(type === 'right' && { left: 0 }),
    ...(type === 'top' && { bottom: 0 }),
    position: 'inherit'
  };
};

const getPanelStyle = (type, size) => {
  const horizontal = type === 'bottom' || type === 'top';
  return {
    width: horizontal ? '100vw' : `${size}vw`,
    height: horizontal ? `${size}vh` : '100vh',
    ...(type === 'right' && { right: 0 }),
    ...(type === 'bottom' && { bottom: 0 }),
    position: 'inherit',
    overflow: 'auto'
  };
};

const SlidingPanel = ({
  type, size, isOpen, onOpen, onOpening, onOpened, onClose, onClosing, onClosed,
  backdropClicked, children,
}) => {
  const glassBefore = type === 'right' || type === 'bottom';
  const horizontal = type === 'bottom' || type === 'top';
  return (
    <div>
      <div className={`sliding-panel-container ${isOpen ? 'active' : ''}`}>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames={`panel-container-${type}`}
          unmountOnExit
          onEnter={(node, isAppearing) => onOpen(node, isAppearing)}
          onEntering={(node, isAppearing) => onOpening(node, isAppearing)}
          onEntered={(node, isAppearing) => onOpened(node, isAppearing)}
          onExit={(node) => onClose(node)}
          onExiting={(node) => onClosing(node)}
          onExited={(node) => onClosed(node)}
          style={{ display: horizontal ? 'block' : 'flex' }}
        >
          <div>
            {glassBefore && (
              <div
                className='glass'
                style={getPanelGlassStyle(type, size)}
                onClick={(e) => backdropClicked(e)}
              />
            )}
            <div className='panel' style={getPanelStyle(type, size)}>
              <div className='panel-content'>{children}</div>
            </div>
            {!glassBefore && (
              <div
                className='glass'
                style={getPanelGlassStyle(type, size)}
                onClick={(e) => backdropClicked(e)}
              />
            )}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

SlidingPanel.propTypes = {
  type: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  size: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func,
  onOpening: PropTypes.func,
  onOpened: PropTypes.func,
  onClose: PropTypes.func,
  onClosing: PropTypes.func,
  onClosed: PropTypes.func,
  backdropClicked: PropTypes.func,
  children: PropTypes.element,
};

SlidingPanel.defaultProps = {
  type: 'left',
  size: 50,
  backdropClicked: () => null,
};

export default SlidingPanel;
