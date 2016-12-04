(function() {
	'use strict';

	/**
	 * @name nFormField
	 * @author Dennis Haulund Nielsen <dhni@nodes.dk>
	 * @description
	 *
	 */
	angular
		.module('nFormField', [])
		.component('nFormField', {
			controller: nFormFieldController,
			bindings: {
				isSuccess: '<',
				isWarning: '<',
				isError: '<',
				isLoading: '<'
			}
		});

	/* @ngInject */
	function nFormFieldController($scope, $element, $interpolate, $exceptionHandler) {
		/*jshint validthis: true */
		var vm = this;
		
		var CLASSES = {
			error: {
				'label': 'is-invalid-label',
				'input': 'is-invalid-input',
				'text': 'is-visible'
			},
			warning: {
				'label': 'is-warning-label',
				'input': 'is-warning-input',
				'text': 'is-visible'
			},
			success: {
				'label': 'is-success-label',
				'input': 'is-success-input',
				'text': 'is-visible'
			},
			loading: {
				'label': 'is-loading-label',
				'input': 'is-loading-input',
				'text': 'is-visible'
			}
		};
		
		var $label = $element.find('[n-form-field-label]');
		var $input = $element.find('[n-form-field-input]');
		var $inputGroupLabel = $element.find('.input-group-label');
		
		vm.$onInit = function() {
			
			$scope.$watch(function() {
				return vm.isError;
			}, onValidityChanged);
			
			$scope.$watch(function() {
				return vm.isSuccess;
			}, onSuccessChanged);
			
			$scope.$watch(function() {
				return vm.isWarning;
			}, onWarningChanged);

			$scope.$watch(function() {
				return vm.isLoading;
			}, onLoadingChanged);
		};
		
		function onValidityChanged(newVal) {
			if(!newVal) {
				newVal = false;
			}
			var $errorTxt = $element.find('.form-error');
			
			$label.toggleClass(CLASSES.error['label'], newVal);
			$inputGroupLabel.toggleClass(CLASSES.error['label'], newVal);
			$input.toggleClass(CLASSES.error['input'], newVal);
			$errorTxt.toggleClass(CLASSES.error['text'], newVal);
		}
		
		function onSuccessChanged(newVal) {
			if(!newVal) {
				newVal = false;
			}
			var $successTxt = $element.find('.form-success');
			
			$label.toggleClass(CLASSES.success['label'], newVal);
			$inputGroupLabel.toggleClass(CLASSES.success['label'], newVal);
			$input.toggleClass(CLASSES.success['input'], newVal);
			$successTxt.toggleClass(CLASSES.success['text'], newVal);
		}
		
		function onWarningChanged(newVal) {
			if(!newVal) {
				newVal = false;
			}
			var $warningTxt = $element.find('.form-warning');
			
			$label.toggleClass(CLASSES.warning['label'], newVal);
			$inputGroupLabel.toggleClass(CLASSES.warning['label'], newVal);
			$input.toggleClass(CLASSES.warning['input'], newVal);
			$warningTxt.toggleClass(CLASSES.warning['text'], newVal);
		}

		function onLoadingChanged(newVal) {
			if(!newVal) {
				newVal = false;
			}
			var $warningTxt = $element.find('.form-loading');

			$label.toggleClass(CLASSES.loading['label'], newVal);
			$inputGroupLabel.toggleClass(CLASSES.loading['label'], newVal);
			$input.toggleClass(CLASSES.loading['input'], newVal);
			$warningTxt.toggleClass(CLASSES.loading['text'], newVal);
		}
		
	};

})();
