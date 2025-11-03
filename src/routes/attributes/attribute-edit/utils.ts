interface PossibleValue {
  value?: string;
}

export function findDuplicatePossibleValues(
  possibleValues: PossibleValue[]
): string[] {
  if (!possibleValues || possibleValues.length === 0) {
    return [];
  }

  const normalizedValueMap = new Map<string, string>();
  const duplicateValues = new Set<string>();

  for (const possibleValue of possibleValues) {
    const originalValue = possibleValue.value?.trim();

    if (!originalValue) {
      continue;
    }

    const normalizedValue = originalValue.toLowerCase();

    if (normalizedValueMap.has(normalizedValue)) {
      const firstOccurrence = normalizedValueMap.get(normalizedValue);
      if (firstOccurrence) {
        duplicateValues.add(firstOccurrence);
      }
    } else {
      normalizedValueMap.set(normalizedValue, originalValue);
    }
  }

  return Array.from(duplicateValues);
}

