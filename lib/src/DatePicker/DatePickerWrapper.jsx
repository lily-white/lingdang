import React from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from '../wrappers/ModalWrapper';
import DatePicker from './DatePicker';
import DomainPropTypes from '../constants/prop-types';
import BasePicker from '../_shared/BasePicker';
import withUtils from '../_shared/WithUtils';

export const DatePickerWrapper = (props) => {
  const {
    allowKeyboardControl,
    animateYearScrolling,
    autoOk,
    disableFuture,
    disablePast,
    format,
    forwardedRef,
    labelFunc,
    leftArrowIcon,
    maxDate,
    maxDateMessage,
    minDate,
    minDateMessage,
    onChange,
    openToYearSelection,
    renderDay,
    rightArrowIcon,
    shouldDisableDate,
    utils,
    value,
    ...other
  } = props;

  return (
    <BasePicker {...props}>
      {
        ({
          date,
          handleAccept,
          handleChange,
          handleClear,
          handleDismiss,
          handleSetTodayDate,
          handleTextFieldChange,
        }) => (
          <ModalWrapper
            disableFuture={disableFuture}
            disablePast={disablePast}
            format={format}
            labelFunc={labelFunc}
            maxDate={maxDate}
            maxDateMessage={maxDateMessage}
            minDate={minDate}
            minDateMessage={minDateMessage}
            onAccept={handleAccept}
            onChange={handleTextFieldChange}
            onClear={handleClear}
            onDismiss={handleDismiss}
            onSetToday={handleSetTodayDate}
            ref={forwardedRef}
            value={value}
            {...other}
          >
            <DatePicker
              allowKeyboardControl={allowKeyboardControl}
              animateYearScrolling={animateYearScrolling}
              date={date}
              disableFuture={disableFuture}
              disablePast={disablePast}
              leftArrowIcon={leftArrowIcon}
              maxDate={maxDate}
              minDate={minDate}
              onChange={handleChange}
              openToYearSelection={openToYearSelection}
              renderDay={renderDay}
              rightArrowIcon={rightArrowIcon}
              shouldDisableDate={shouldDisableDate}
              utils={utils}
            />
          </ModalWrapper>
        )
      }
    </BasePicker>
  );
};

DatePickerWrapper.propTypes = {
  utils: PropTypes.object.isRequired,
  /** Datepicker value */
  value: DomainPropTypes.date,
  /** Min selectable date */
  minDate: DomainPropTypes.date,
  /** Error message displaying if date is before minimal date */
  minDateMessage: PropTypes.string,
  /** Max selectable date */
  maxDate: DomainPropTypes.date,
  /** Error message displaying if date is after maximal date */
  maxDateMessage: PropTypes.string,
  /** Date format string for input */
  format: PropTypes.string,
  /** Callback firing when date accepted */
  onChange: PropTypes.func.isRequired,
  /** Auto accept date on selection */
  autoOk: PropTypes.bool,
  /** Disable past dates */
  disablePast: PropTypes.bool,
  /** Disable future dates */
  disableFuture: PropTypes.bool,
  /** To animate scrolling to current year (with scrollIntoView) */
  animateYearScrolling: PropTypes.bool,
  /** Open datepicker from year selection */
  openToYearSelection: PropTypes.bool,
  /** Allow to specify dynamic label for text field labelFunc(date, invalidLabel) */
  labelFunc: PropTypes.func,
  /** Left arrow icon */
  leftArrowIcon: PropTypes.node,
  /** Right arrow icon */
  rightArrowIcon: PropTypes.node,
  /** Custom renderer for day renderDay(date, selectedDate, dayInCurrentMonth) */
  renderDay: PropTypes.func,
  /** Disable specific date */
  shouldDisableDate: PropTypes.func,
  /** Enables keyboard listener for moving between days in calendar */
  allowKeyboardControl: PropTypes.bool,
  forwardedRef: PropTypes.func,
};

DatePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'MMMM Do',
  autoOk: false,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disableFuture: false,
  disablePast: false,
  animateYearScrolling: false,
  openToYearSelection: false,
  allowKeyboardControl: true,
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  renderDay: undefined,
  labelFunc: undefined,
  shouldDisableDate: undefined,
  minDateMessage: undefined,
  maxDateMessage: undefined,
  forwardedRef: undefined,
};

const WithUtils = withUtils()(DatePickerWrapper);
export default React.forwardRef((props, ref) => <WithUtils {...props} forwardedRef={ref} />);

