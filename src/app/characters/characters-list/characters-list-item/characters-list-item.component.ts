import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { Character } from '../../shared/models';
@Component({
  selector: 'characters-list-item',
  templateUrl: './characters-list-item.component.html',
  styleUrl: './characters-list-item.component.scss',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListItemComponent {
  readonly placeholderImage =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAATsAAAE7AGKbv1yAAAB+0lEQVR4nO2XPWsVQRSGxw/UyjqIgqKt+AcELVRstfMfCGI0IBZ+9ApipYhdULG4YNRCsIhuc9153vFidZVwf0E0hQjaxJiVI3vhRrx3ZyYraXLgVHvO+7xzZnfYcVVVuY1Mt2lgGEVR7AJmJPWAH5K+SXoLnKuqaotLDOuxXtMwrVrTtGeMtaZY0hTwQVI1Jp8PBoOdsfB+v78DmBunV7Omhk63Au8mwIdN92MNSLoXodc1tgshnG0qrnOlLMtDTfBer3fQamM0je2A2UgD5vpyxOqnE/RmreFNbIOku00GgDsJeoU1PEtouGmQEMK+eusu1nkG2FtP4HrCBOaSRua9vwG8B1b/IbYKhBQDxrYJ7Ja0GOH2a4JwTO2isf/sWwjhGPB9QvHPBHhjj7GMueblKcvyMDA/Ol5gGVjKgA/7v5jGX9s0b6yxb3G3293jvT/uvT8KXMuFj0CvmpZpmrZLPE6X1mtA0mfTcqkh6XQL8OHXczLHwO22DAC3cgw8bdHAkxwDL9syIOlFjoGHLU7gQbIB7/2lFicwnWNgf4sTOOByAnjdgoFXWXAL4MjoUZqx8uWJx25MABfWsfrzUZCmsPMc+JUAXgGuuDYDOCXpUwT8YwjhhPsfURTFdvsVAx4DC3bZqHNB0iN71ul0tiWJVpuX02pjr+e/ATuTQfqHZKaKAAAAAElFTkSuQmCC';

  $character = input<Character>(
    {
      imageUrl: this.placeholderImage,
      name: '',
    } as Character,
    { alias: 'character' },
  );
  $isLoading = input<boolean>(true, { alias: 'isLoading' });

  $filmsLabel = computed(() => {
    return this.$character().films.length > 0 ? this.$character().films.join(', ') : 'No films';
  });
}
