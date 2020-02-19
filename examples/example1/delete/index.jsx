import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const getPanelGlassStyle = (type, size) => {
  const horizontal = type === 'bottom' || type === 'top';
  return {
    width: horizontal ? '100vw' : `${100 - size}vw`,
    height: horizontal ? `${100 - size}vh` : '100vh',
    ...(type === 'right' && { left: 0 }),
    ...(type === 'top' && { bottom: 0 }),
    position: 'inherit',
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
    overflow: 'auto',
  };
};

const SlidingPanel = ({
  type,
  size,
  duration,
  panelClassName,
  isOpen,
  onOpen,
  onOpening,
  onOpened,
  onClose,
  onClosing,
  onClosed,
  backdropClicked,
  children,
}) => {
  const glassBefore = type === 'right' || type === 'bottom';
  const horizontal = type === 'bottom' || type === 'top';

  const defaultStyle = {
    transition: `transform ${duration}ms, opacity ${duration}ms`,
    opacity: 0,
  };

  const getTransitionStyles = (state) => {
    const styles = {
      entering: {
        opacity: 1,
        transform: `translate${horizontal ? 'Y' : 'X'}(${glassBefore ? '' : '-'}100%)`,
      },
      entered: {
        opacity: 1,
        transform: `translate${horizontal ? 'Y' : 'X'}(0)`,
      },
      exiting: {
        opacity: 0,
        transform: `translate${horizontal ? 'Y' : 'X'}(${glassBefore ? '' : '-'}100%)`,
      },
      exited: {
        opacity: 0,
        transform: `translate${horizontal ? 'Y' : 'X'}(0)`,
      }
    };
    return styles[state];
  };

  return (
    <div>
      <div
        className={`sliding-panel-container ${isOpen ? 'active' : ''}`}
        style={{
          position: 'fixed',
          zIndex: 15000,
          top: 0,
          left: 0,
          ...isOpen && { backgroundColor: 'rgba(0, 0, 0, 0.3)', willChange: 'transform' },
        }}
      >
        <Transition
          in={isOpen}
          timeout={500}
          unmountOnExit
          onEnter={(node, isAppearing) => onOpen(node, isAppearing)}
          onEntering={(node, isAppearing) => onOpening(node, isAppearing)}
          onEntered={(node, isAppearing) => onOpened(node, isAppearing)}
          onExit={node => onClose(node)}
          onExiting={node => onClosing(node)}
          onExited={node => onClosed(node)}
        >
          {state => (
            <div
              style={{
                ...(state === 'entered' || state === 'exiting') && defaultStyle,
                ...getTransitionStyles(state),
                display: horizontal ? 'block' : 'flex',
              }}
            >
              {glassBefore && (
                <div
                  className="glass"
                  style={getPanelGlassStyle(type, size)}
                  onClick={e => backdropClicked(e)}
                />
              )}
              <div className="panel" style={getPanelStyle(type, size)}>
                <div
                  className={`panel-content ${panelClassName || ''}`}
                  style={{ height: '100%', width: '100%' }}
                >
                  {children}
                </div>
              </div>
              {!glassBefore && (
                <div
                  className="glass"
                  style={getPanelGlassStyle(type, size)}
                  onClick={e => backdropClicked(e)}
                />
              )}
            </div>
          )}
        </Transition>
      </div>
    </div >
  );
};

SlidingPanel.propTypes = {
  type: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  size: PropTypes.number,
  duration: PropTypes.number,
  panelClassName: PropTypes.string,
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
  duration: 500,
  panelClassName: '',
  onOpen: () => null,
  onOpening: () => null,
  onOpened: () => null,
  onClose: () => null,
  onClosing: () => null,
  onClosed: () => null,
  backdropClicked: () => null,
  children: null,
};

export default SlidingPanel;
