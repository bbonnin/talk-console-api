console.group([label])

console.groupCollapsed([label])

console.groupEnd([label])

console.group('Sous Traitement Niveau 1')
console.warn('Mon traitement de sous-niveau 1')
console.groupCollapsed('Sous Traitement Niveau 2')
console.error('Mon traitement de sous-niveau 2')
console.groupEnd()
console.warn('Retour au sous-niveau 1')
console.groupEnd()

▼ Sous Traitement Niveau 1
|  ⚠ ▶ Mon traitement de sous-niveau 1
|  ▶ Sous Traitement Niveau 2
|  ⚠ ▶ demos.html:22 Retour au sous-niveau 1