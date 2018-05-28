declare const ReactNativeHaptic: {
  prepare(): void
  generate(type: 
    'impact' | 
    'notification.warning' | 'notification.success' | 'notification.error' |
    'selection'): void
}

export default ReactNativeHaptic;