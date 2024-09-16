import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens, semanticColors } from '../../tokens'
import { WARNING } from '../../recipes/shared/palettes'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface WarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const warningTokens: WarningTokens = {
  warning: {
    border: {
      initial: {
        description:
          semanticColors.border[WARNING].initial.$description ||
          'The default border color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.warning.initial.$value,
            ).$value,
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          semanticColors.background[WARNING].initial.$description ||
          'The default background color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.warning.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.background[WARNING].hover.$description ||
          'The hover background color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.warning.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.warning.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.warning.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.background[WARNING].active.$description ||
          'The active background color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.warning.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.warning.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.warning.active.$value,
            ).$value,
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          semanticColors.ghost[WARNING].initial.$description ||
          'The default ghost color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.warning.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.ghost[WARNING].hover.$description ||
          'The hover ghost color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.warning.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.warning.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.warning.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.ghost[WARNING].active.$description ||
          'The active ghost color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.warning.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.warning.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.warning.active.$value,
            ).$value,
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          semanticColors.surface[WARNING].initial.$description ||
          'The default color for static (surface) elements that display a warning state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.surface[WARNING]['100'].$description ||
          'The second layer of color for static (surface) elements that display a warning state - used on top of initial.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.warning['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.surface[WARNING]['200'].$description ||
          'The third layer of color for static (surface) elements that display a warning state - used on top of 100.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.warning['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.warning['200'].$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description:
          semanticColors.text[WARNING].initial.$description ||
          'The default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.text[WARNING]['100'].$description ||
          'The secondary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.text[WARNING]['200'].$description ||
          'The tertiary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning['200'].$value,
            ).$value,
          },
        },
      },
      inverse: {
        description:
          semanticColors.text[WARNING].inverse.$description ||
          'The inverse version of the default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.inverse.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning.inverse.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.inverse.$value,
            ).$value,
          },
        },
      },
      static: {
        description:
          semanticColors.text[WARNING].static.$description ||
          'The static version of the default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.static.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.warning.static.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.warning.static.$value,
            ).$value,
          },
        },
      },
    },
  },
}
