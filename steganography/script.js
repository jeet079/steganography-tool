
    // DOM Elements
    const elements = {
      // App controls
      themeToggle: document.getElementById('themeToggle'),
      languageSelector: document.getElementById('languageSelector'),
      
      // Encode Panel
      uploadContainer: document.getElementById('uploadContainer'),
      uploadInput: document.getElementById('upload'),
      previewContainer: document.getElementById('previewContainer'),
      previewImage: document.getElementById('previewImage'),
      secretInput: document.getElementById('secret'),
      uploadTextFileBtn: document.getElementById('uploadTextFile'),
      uploadBinaryFileBtn: document.getElementById('uploadBinaryFile'),
      textFileInput: document.getElementById('textFileInput'),
      binaryFileInput: document.getElementById('binaryFileInput'),
      bitDepthSelect: document.getElementById('bitDepth'),
      encryptToggle: document.getElementById('encryptToggle'),
      passwordGroup: document.getElementById('passwordGroup'),
      encryptPassword: document.getElementById('encryptPassword'),
      passwordStrengthBar: document.getElementById('passwordStrengthBar'),
      encryptionMethod: document.getElementById('encryptionMethod'),
      watermarkToggle: document.getElementById('watermarkToggle'),
      watermarkType: document.getElementById('watermarkType'),
      watermarkTextGroup: document.getElementById('watermarkTextGroup'),
      watermarkText: document.getElementById('watermarkText'),
      watermarkImageGroup: document.getElementById('watermarkImageGroup'),
      watermarkImage: document.getElementById('watermarkImage'),
      watermarkPreview: document.getElementById('watermarkPreview'),
      compressToggle: document.getElementById('compressToggle'),
      algorithm: document.getElementById('algorithm'),
      encodeBtn: document.getElementById('encodeBtn'),
      encodeProgress: document.getElementById('encodeProgress'),
      encodeProgressBar: document.getElementById('encodeProgressBar'),
      compareBtn: document.getElementById('compareBtn'),
      resetBtn: document.getElementById('resetBtn'),
      downloadGroup: document.getElementById('downloadGroup'),
      downloadLink: document.getElementById('downloadLink'),
      debugBtn: document.getElementById('debugBtn'),
      zipBtn: document.getElementById('zipBtn'),
      capacityInfo: document.getElementById('capacityInfo'),
      pixelInfo: document.getElementById('pixelInfo'),
      debugOverlay: document.getElementById('debugOverlay'),
      debugColorPicker: document.getElementById('debugColorPicker'),
      magnifier: document.getElementById('magnifier'),
      magnifierContent: document.getElementById('magnifierContent'),
      comparisonSlider: document.getElementById('comparisonSlider'),
      beforeImage: document.getElementById('beforeImage'),
      afterImage: document.getElementById('afterImage'),
      charCount: document.getElementById('charCount'),
      wordCount: document.getElementById('wordCount'),
      byteCount: document.getElementById('byteCount'),
      encodeHistory: document.getElementById('encodeHistory'),
      encodeConsole: document.getElementById('encodeConsole'),
      
      // Batch Encode
      batchTab: document.getElementById('batchTab'),
      singleTab: document.getElementById('singleTab'),
      batchUploadContainer: document.getElementById('batchUploadContainer'),
      batchUploadInput: document.getElementById('batchUpload'),
      batchSecretInput: document.getElementById('batchSecret'),
      batchBitDepthSelect: document.getElementById('batchBitDepth'),
      batchEncryptToggle: document.getElementById('batchEncryptToggle'),
      batchPasswordGroup: document.getElementById('batchPasswordGroup'),
      batchEncryptPassword: document.getElementById('batchEncryptPassword'),
      batchPasswordStrengthBar: document.getElementById('batchPasswordStrengthBar'),
      batchList: document.getElementById('batchList'),
      batchProgress: document.getElementById('batchProgress'),
      batchProgressBar: document.getElementById('batchProgressBar'),
      batchEncodeBtn: document.getElementById('batchEncodeBtn'),
      batchResetBtn: document.getElementById('batchResetBtn'),
      batchDownloadGroup: document.getElementById('batchDownloadGroup'),
      batchDownloadBtn: document.getElementById('batchDownloadBtn'),
      batchCharCount: document.getElementById('batchCharCount'),
      batchWordCount: document.getElementById('batchWordCount'),
      batchByteCount: document.getElementById('batchByteCount'),
      
      // Decode Panel
      stegoUploadContainer: document.getElementById('stegoUploadContainer'),
      stegoUploadInput: document.getElementById('stegoUpload'),
      stegoPreviewContainer: document.getElementById('stegoPreviewContainer'),
      stegoPreviewImage: document.getElementById('stegoPreviewImage'),
      extractedInput: document.getElementById('extracted'),
      decodeBitDepthSelect: document.getElementById('decodeBitDepth'),
      decryptToggle: document.getElementById('decryptToggle'),
      decryptPasswordGroup: document.getElementById('decryptPasswordGroup'),
      decryptPassword: document.getElementById('decryptPassword'),
      decodeEncryptionMethod: document.getElementById('decodeEncryptionMethod'),
      decompressToggle: document.getElementById('decompressToggle'),
      decodeAlgorithm: document.getElementById('decodeAlgorithm'),
      decodeBtn: document.getElementById('decodeBtn'),
      decodeProgress: document.getElementById('decodeProgress'),
      decodeProgressBar: document.getElementById('decodeProgressBar'),
      copyBtn: document.getElementById('copyBtn'),
      clearBtn: document.getElementById('clearBtn'),
      saveTextBtn: document.getElementById('saveTextBtn'),
      validateBtn: document.getElementById('validateBtn'),
      qrContainer: document.getElementById('qrContainer'),
      qrCode: document.getElementById('qrCode'),
      downloadQrBtn: document.getElementById('downloadQrBtn'),
      extractedCharCount: document.getElementById('extractedCharCount'),
      extractedWordCount: document.getElementById('extractedWordCount'),
      extractedByteCount: document.getElementById('extractedByteCount'),
      decodeHistory: document.getElementById('decodeHistory'),
      decodeConsole: document.getElementById('decodeConsole'),
      
      // Canvas
      canvas: document.getElementById('canvas'),
      originalCanvas: document.getElementById('originalCanvas'),
      stegoCanvas: document.getElementById('stegoCanvas'),
      
      // Toast
      toastContainer: document.getElementById('toastContainer'),
      
      // Tabs
      tabs: document.querySelectorAll('.tab'),
      tabContents: document.querySelectorAll('.tab-content')
    };

    // State
    const state = {
      originalImage: null,
      stegoImage: null,
      modifiedPixels: [],
      isEncoding: false,
      isDecoding: false,
      isBatchProcessing: false,
      batchItems: [],
      debugColor: 'rgba(255, 0, 0, 0.5)',
      history: {
        encode: [],
        decode: []
      },
      theme: 'light',
      language: 'en',
      translations: {
        en: {
          appTitle: "PixelVault",
          appSubtitle: "Advanced Image Steganography Tool",
          hideSecret: "Hide Secret Message",
          extractSecret: "Extract Hidden Message",
          uploadCover: "Upload Cover Image",
          dragDrop: "Drag & Drop or Click to Browse",
          supports: "Supports PNG, JPEG, WEBP (Max 10MB)",
          secretMessage: "Secret Message",
          enterSecret: "Enter your secret message here...",
          characters: "characters",
          words: "words",
          bytes: "bytes",
          uploadTextFile: "Upload Text File",
          uploadBinaryFile: "Upload Binary File",
          bitDepth: "Bit Depth:",
          encryption: "Encryption:",
          encryptPassword: "Enter encryption password",
          encryptionMethod: "Encryption Method:",
          watermark: "Watermark:",
          watermarkText: "Enter watermark text",
          watermarkImage: "Upload Watermark Image",
          watermarkType: "Watermark Type:",
          dataCompression: "Data Compression:",
          algorithm: "Algorithm:",
          hideMessage: "Hide Message",
          compare: "Compare",
          reset: "Reset",
          downloadStego: "Download Stego Image",
          debugView: "Debug View",
          saveZip: "Save as ZIP",
          imageCapacity: "Image Capacity:",
          messageSize: "Message Size:",
          recentEncodings: "Recent Encodings",
          encodingLog: "Encoding Log",
          uploadMultiple: "Upload Multiple Images",
          batchSecret: "Batch Secret Message",
          processBatch: "Process Batch",
          clearBatch: "Clear Batch",
          downloadBatch: "Download All as ZIP",
          uploadStego: "Upload Stego Image",
          extractedMessage: "Extracted Message",
          extractedPlaceholder: "Extracted message will appear here",
          encrypted: "Encrypted:",
          decryptPassword: "Enter decryption password",
          decompress: "Compressed:",
          extractMessage: "Extract Message",
          copyClipboard: "Copy to Clipboard",
          clear: "Clear",
          saveText: "Save as Text File",
          validateStego: "Validate Stego",
          qrCode: "QR Code of Extracted Message",
          downloadQR: "Download QR Code",
          recentDecodings: "Recent Decodings",
          decodingLog: "Decoding Log",
          singleImage: "Single Image",
          batchProcess: "Batch Process"
        },
        es: {
          appTitle: "PixelVault",
          appSubtitle: "Herramienta Avanzada de Esteganografía",
          hideSecret: "Ocultar Mensaje Secreto",
          extractSecret: "Extraer Mensaje Oculto",
          uploadCover: "Subir Imagen de Portada",
          dragDrop: "Arrastrar y Soltar o Hacer Clic para Buscar",
          supports: "Soporta PNG, JPEG, WEBP (Máx. 10MB)",
          secretMessage: "Mensaje Secreto",
          enterSecret: "Ingrese su mensaje secreto aquí...",
          characters: "caracteres",
          words: "palabras",
          bytes: "bytes",
          uploadTextFile: "Subir Archivo de Texto",
          uploadBinaryFile: "Subir Archivo Binario",
          bitDepth: "Profundidad de Bits:",
          encryption: "Encriptación:",
          encryptPassword: "Ingrese contraseña de encriptación",
          encryptionMethod: "Método de Encriptación:",
          watermark: "Marca de Agua:",
          watermarkText: "Ingrese texto de marca de agua",
          watermarkImage: "Subir Imagen de Marca de Agua",
          watermarkType: "Tipo de Marca de Agua:",
          dataCompression: "Compresión de Datos:",
          algorithm: "Algoritmo:",
          hideMessage: "Ocultar Mensaje",
          compare: "Comparar",
          reset: "Reiniciar",
          downloadStego: "Descargar Imagen Estego",
          debugView: "Vista de Depuración",
          saveZip: "Guardar como ZIP",
          imageCapacity: "Capacidad de Imagen:",
          messageSize: "Tamaño de Mensaje:",
          recentEncodings: "Codificaciones Recientes",
          encodingLog: "Registro de Codificación",
          uploadMultiple: "Subir Múltiples Imágenes",
          batchSecret: "Mensaje Secreto por Lotes",
          processBatch: "Procesar Lote",
          clearBatch: "Limpiar Lote",
          downloadBatch: "Descargar Todo como ZIP",
          uploadStego: "Subir Imagen Estego",
          extractedMessage: "Mensaje Extraído",
          extractedPlaceholder: "El mensaje extraído aparecerá aquí",
          encrypted: "Encriptado:",
          decryptPassword: "Ingrese contraseña de desencriptación",
          decompress: "Comprimido:",
          extractMessage: "Extraer Mensaje",
          copyClipboard: "Copiar al Portapapeles",
          clear: "Limpiar",
          saveText: "Guardar como Archivo de Texto",
          validateStego: "Validar Estego",
          qrCode: "Código QR del Mensaje Extraído",
          downloadQR: "Descargar Código QR",
          recentDecodings: "Decodificaciones Recientes",
          decodingLog: "Registro de Decodificación",
          singleImage: "Imagen Única",
          batchProcess: "Proceso por Lotes"
        },
        fr: {
          appTitle: "PixelVault",
          appSubtitle: "Outil Avancé de Stéganographie",
          hideSecret: "Cacher un Message Secret",
          extractSecret: "Extraire un Message Caché",
          uploadCover: "Télécharger une Image de Couverture",
          dragDrop: "Glisser-Déposer ou Cliquer pour Parcourir",
          supports: "Supporte PNG, JPEG, WEBP (Max 10MB)",
          secretMessage: "Message Secret",
          enterSecret: "Entrez votre message secret ici...",
          characters: "caractères",
          words: "mots",
          bytes: "octets",
          uploadTextFile: "Télécharger un Fichier Texte",
          uploadBinaryFile: "Télécharger un Fichier Binaire",
          bitDepth: "Profondeur de Bits:",
          encryption: "Chiffrement:",
          encryptPassword: "Entrez un mot de passe de chiffrement",
          encryptionMethod: "Méthode de Chiffrement:",
          watermark: "Filigrane:",
          watermarkText: "Entrez un texte de filigrane",
          watermarkImage: "Télécharger une Image de Filigrane",
          watermarkType: "Type de Filigrane:",
          dataCompression: "Compression de Données:",
          algorithm: "Algorithme:",
          hideMessage: "Cacher le Message",
          compare: "Comparer",
          reset: "Réinitialiser",
          downloadStego: "Télécharger l'Image Stego",
          debugView: "Vue de Débogage",
          saveZip: "Enregistrer en ZIP",
          imageCapacity: "Capacité de l'Image:",
          messageSize: "Taille du Message:",
          recentEncodings: "Encodages Récents",
          encodingLog: "Journal d'Encodage",
          uploadMultiple: "Télécharger des Images Multiples",
          batchSecret: "Message Secret par Lots",
          processBatch: "Traiter le Lot",
          clearBatch: "Effacer le Lot",
          downloadBatch: "Télécharger Tout en ZIP",
          uploadStego: "Télécharger une Image Stego",
          extractedMessage: "Message Extraît",
          extractedPlaceholder: "Le message extraît apparaîtra ici",
          encrypted: "Chiffré:",
          decryptPassword: "Entrez un mot de passe de déchiffrement",
          decompress: "Compressé:",
          extractMessage: "Extraire le Message",
          copyClipboard: "Copier dans le Presse-papiers",
          clear: "Effacer",
          saveText: "Enregistrer en Fichier Texte",
          validateStego: "Valider Stego",
          qrCode: "QR Code du Message Extraît",
          downloadQR: "Télécharger le QR Code",
          recentDecodings: "Décodages Récents",
          decodingLog: "Journal de Décodage",
          singleImage: "Image Unique",
          batchProcess: "Traitement par Lots"
        }
      }
    };

    // Initialize
    function init() {
      setupEventListeners();
      updateCharacterCounts();
      updateUIForLanguage();
      
      // Load history from localStorage
      loadHistory();
      
      // Set up tabs
      setupTabs();
    }

    // Event Listeners
    function setupEventListeners() {
      // Theme toggle
      elements.themeToggle.addEventListener('click', toggleTheme);
      
      // Language selector
      elements.languageSelector.addEventListener('change', (e) => {
        state.language = e.target.value;
        updateUIForLanguage();
      });
      
      // Encode Panel
      elements.uploadInput.addEventListener('change', handleImageUpload);
      elements.textFileInput.addEventListener('change', handleTextFileUpload);
      elements.binaryFileInput.addEventListener('change', handleBinaryFileUpload);
      elements.uploadTextFileBtn.addEventListener('click', () => elements.textFileInput.click());
      elements.uploadBinaryFileBtn.addEventListener('click', () => elements.binaryFileInput.click());
      elements.secretInput.addEventListener('input', () => {
        updateCharacterCounts();
        updateCapacityInfo();
      });
      elements.bitDepthSelect.addEventListener('change', updateCapacityInfo);
      elements.encryptToggle.addEventListener('change', () => {
        elements.passwordGroup.style.display = elements.encryptToggle.checked ? 'block' : 'none';
      });
      elements.encryptPassword.addEventListener('input', updatePasswordStrength);
      elements.watermarkToggle.addEventListener('change', () => {
        const watermarkType = elements.watermarkType.value;
        if (elements.watermarkToggle.checked) {
          elements.watermarkTextGroup.style.display = watermarkType === 'text' ? 'block' : 'none';
          elements.watermarkImageGroup.style.display = watermarkType === 'image' ? 'block' : 'none';
        } else {
          elements.watermarkTextGroup.style.display = 'none';
          elements.watermarkImageGroup.style.display = 'none';
        }
      });
      elements.watermarkType.addEventListener('change', (e) => {
        if (elements.watermarkToggle.checked) {
          elements.watermarkTextGroup.style.display = e.target.value === 'text' ? 'block' : 'none';
          elements.watermarkImageGroup.style.display = e.target.value === 'image' ? 'block' : 'none';
        }
      });
      elements.watermarkImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            elements.watermarkPreview.src = event.target.result;
            elements.watermarkPreview.style.display = 'block';
          };
          reader.readAsDataURL(file);
        }
      });
      elements.encodeBtn.addEventListener('click', encodeMessage);
      elements.compareBtn.addEventListener('click', toggleComparison);
      elements.resetBtn.addEventListener('click', resetEncodePanel);
      elements.debugBtn.addEventListener('click', toggleDebugView);
      elements.zipBtn.addEventListener('click', saveAsZip);
      
      // Debug color picker
      document.querySelectorAll('.debug-color-option').forEach(option => {
        option.addEventListener('click', (e) => {
          document.querySelector('.debug-color-option.selected').classList.remove('selected');
          e.target.classList.add('selected');
          state.debugColor = e.target.dataset.color;
          if (elements.debugOverlay.style.display === 'block') {
            showDebugView();
          }
        });
      });
      
      // Drag and drop for encode
      elements.uploadContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.uploadContainer.classList.add('pulse');
      });
      elements.uploadContainer.addEventListener('dragleave', () => {
        elements.uploadContainer.classList.remove('pulse');
      });
      elements.uploadContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        elements.uploadContainer.classList.remove('pulse');
        if (e.dataTransfer.files.length) {
          elements.uploadInput.files = e.dataTransfer.files;
          handleImageUpload({ target: elements.uploadInput });
        }
      });
      
      // Magnifier
      elements.previewContainer.addEventListener('mousemove', (e) => {
        if (!state.originalImage) return;
        
        const rect = elements.previewContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const imgRect = elements.previewImage.getBoundingClientRect();
        const imgX = Math.floor((x - (imgRect.left - rect.left)) * (elements.previewImage.naturalWidth / imgRect.width));
        const imgY = Math.floor((y - (imgRect.top - rect.top)) * (elements.previewImage.naturalHeight / imgRect.height));
        
        if (imgX >= 0 && imgX < elements.previewImage.naturalWidth && 
            imgY >= 0 && imgY < elements.previewImage.naturalHeight) {
          // Show pixel info
          const ctx = elements.canvas.getContext('2d');
          const pixel = ctx.getImageData(imgX, imgY, 1, 1).data;
          elements.pixelInfo.textContent = `X: ${imgX}, Y: ${imgY} | R: ${pixel[0]}, G: ${pixel[1]}, B: ${pixel[2]}`;
          elements.pixelInfo.style.display = 'block';
          elements.pixelInfo.style.left = `${x + 10}px`;
          elements.pixelInfo.style.top = `${y + 10}px`;
          
          // Show magnifier
          elements.magnifier.style.display = 'block';
          elements.magnifier.style.left = `${x + 20}px`;
          elements.magnifier.style.top = `${y + 20}px`;
          
          // Update magnifier content
          const zoom = 3;
          const magnifierSize = 100;
          const offsetX = imgX - magnifierSize / (2 * zoom);
          const offsetY = imgY - magnifierSize / (2 * zoom);
          
          elements.magnifierContent.style.backgroundImage = `url(${elements.previewImage.src})`;
          elements.magnifierContent.style.backgroundPosition = `-${offsetX * zoom}px -${offsetY * zoom}px`;
          elements.magnifierContent.style.backgroundSize = `${elements.previewImage.naturalWidth * zoom}px ${elements.previewImage.naturalHeight * zoom}px`;
        } else {
          elements.pixelInfo.style.display = 'none';
          elements.magnifier.style.display = 'none';
        }
      });
      
      elements.previewContainer.addEventListener('mouseleave', () => {
        elements.pixelInfo.style.display = 'none';
        elements.magnifier.style.display = 'none';
      });
      
      // Batch Encode
      elements.batchUploadInput.addEventListener('change', handleBatchUpload);
      elements.batchSecretInput.addEventListener('input', () => {
        updateBatchCharacterCounts();
      });
      elements.batchEncryptToggle.addEventListener('change', () => {
        elements.batchPasswordGroup.style.display = elements.batchEncryptToggle.checked ? 'block' : 'none';
      });
      elements.batchEncryptPassword.addEventListener('input', updateBatchPasswordStrength);
      elements.batchEncodeBtn.addEventListener('click', processBatch);
      elements.batchResetBtn.addEventListener('click', resetBatchPanel);
      elements.batchDownloadBtn.addEventListener('click', downloadBatchAsZip);
      
      // Decode Panel
      elements.stegoUploadInput.addEventListener('change', handleStegoImageUpload);
      elements.decryptToggle.addEventListener('change', () => {
        elements.decryptPasswordGroup.style.display = elements.decryptToggle.checked ? 'block' : 'none';
      });
      elements.decodeBtn.addEventListener('click', decodeMessage);
      elements.copyBtn.addEventListener('click', copyToClipboard);
      elements.clearBtn.addEventListener('click', clearDecodePanel);
      elements.saveTextBtn.addEventListener('click', saveAsTextFile);
      elements.validateBtn.addEventListener('click', validateStegoImage);
      elements.downloadQrBtn.addEventListener('click', downloadQRCode);
      
      // Drag and drop for decode
      elements.stegoUploadContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.stegoUploadContainer.classList.add('pulse');
      });
      elements.stegoUploadContainer.addEventListener('dragleave', () => {
        elements.stegoUploadContainer.classList.remove('pulse');
      });
      elements.stegoUploadContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        elements.stegoUploadContainer.classList.remove('pulse');
        if (e.dataTransfer.files.length) {
          elements.stegoUploadInput.files = e.dataTransfer.files;
          handleStegoImageUpload({ target: elements.stegoUploadInput });
        }
      });
      
      // Comparison slider
      const handle = document.querySelector('.comparison-handle');
      const slider = document.querySelector('.comparison-slider');
      let isDragging = false;
      
      handle.addEventListener('mousedown', () => {
        isDragging = true;
      });
      
      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const containerRect = slider.getBoundingClientRect();
        let x = e.clientX - containerRect.left;
        x = Math.max(0, Math.min(x, containerRect.width));
        
        const percent = (x / containerRect.width) * 100;
        document.querySelector('.comparison-before').style.width = `${percent}%`;
        handle.style.left = `${percent}%`;
      });
      
      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
      
      // Touch events for mobile
      handle.addEventListener('touchstart', () => {
        isDragging = true;
      });
      
      document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const containerRect = slider.getBoundingClientRect();
        let x = e.touches[0].clientX - containerRect.left;
        x = Math.max(0, Math.min(x, containerRect.width));
        
        const percent = (x / containerRect.width) * 100;
        document.querySelector('.comparison-before').style.width = `${percent}%`;
        handle.style.left = `${percent}%`;
      });
      
      document.addEventListener('touchend', () => {
        isDragging = false;
      });
    }

    function setupTabs() {
      elements.tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Remove active class from all tabs and contents
          elements.tabs.forEach(t => t.classList.remove('active'));
          elements.tabContents.forEach(c => c.classList.remove('active'));
          
          // Add active class to clicked tab and corresponding content
          tab.classList.add('active');
          const tabId = tab.getAttribute('data-tab');
          document.getElementById(`${tabId}Tab`).classList.add('active');
        });
      });
    }

    function toggleTheme() {
      if (state.theme === 'light') {
        document.body.classList.add('dark-mode');
        elements.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        state.theme = 'dark';
      } else {
        document.body.classList.remove('dark-mode');
        elements.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        state.theme = 'light';
      }
    }

    function updateUIForLanguage() {
      const lang = state.language;
      const t = state.translations[lang] || state.translations.en;
      
      // Update app header
      elements.appTitle.textContent = t.appTitle;
      elements.appSubtitle.textContent = t.appSubtitle;
      
      // Update encode panel
      document.querySelector('.panel-title i.fa-lock').parentElement.textContent = t.hideSecret;
      document.querySelector('#uploadContainer .file-upload-text').textContent = t.dragDrop;
      document.querySelector('#uploadContainer .file-upload-hint').textContent = t.supports;
      document.querySelector('label[for="secret"]').textContent = t.secretMessage;
      elements.secretInput.placeholder = t.enterSecret;
      document.querySelector('label[for="bitDepth"]').textContent = t.bitDepth;
      document.querySelector('label[for="encryptToggle"]').textContent = t.encryption;
      elements.encryptPassword.placeholder = t.encryptPassword;
      document.querySelector('label[for="encryptionMethod"]').textContent = t.encryptionMethod;
      document.querySelector('label[for="watermarkToggle"]').textContent = t.watermark;
      elements.watermarkText.placeholder = t.watermarkText;
      document.querySelector('label[for="watermarkImage"]').textContent = t.watermarkImage;
      document.querySelector('label[for="watermarkType"]').textContent = t.watermarkType;
      document.querySelector('label[for="compressToggle"]').textContent = t.dataCompression;
      document.querySelector('label[for="algorithm"]').textContent = t.algorithm;
      elements.encodeBtn.innerHTML = `<i class="fas fa-lock"></i> ${t.hideMessage}`;
      elements.compareBtn.innerHTML = `<i class="fas fa-exchange-alt"></i> ${t.compare}`;
      elements.resetBtn.innerHTML = `<i class="fas fa-redo"></i> ${t.reset}`;
      elements.downloadLink.innerHTML = `<i class="fas fa-download"></i> ${t.downloadStego}`;
      elements.debugBtn.innerHTML = `<i class="fas fa-bug"></i> ${t.debugView}`;
      elements.zipBtn.innerHTML = `<i class="fas fa-file-archive"></i> ${t.saveZip}`;
      elements.uploadTextFileBtn.innerHTML = `<i class="fas fa-file-upload"></i> ${t.uploadTextFile}`;
      elements.uploadBinaryFileBtn.innerHTML = `<i class="fas fa-file-archive"></i> ${t.uploadBinaryFile}`;
      document.querySelector('#encodeHistory .form-label').textContent = t.recentEncodings;
      document.querySelector('#encodeConsole .form-label').textContent = t.encodingLog;
      
      // Update batch tab
      document.querySelector('[data-tab="batch"]').textContent = t.batchProcess;
      document.querySelector('#batchUploadContainer .file-upload-text').textContent = t.dragDrop;
      document.querySelector('#batchUploadContainer .file-upload-hint').textContent = t.supports;
      document.querySelector('label[for="batchSecret"]').textContent = t.batchSecret;
      document.querySelector('label[for="batchBitDepth"]').textContent = t.bitDepth;
      document.querySelector('label[for="batchEncryptToggle"]').textContent = t.encryption;
      elements.batchEncryptPassword.placeholder = t.encryptPassword;
      elements.batchEncodeBtn.innerHTML = `<i class="fas fa-lock"></i> ${t.processBatch}`;
      elements.batchResetBtn.innerHTML = `<i class="fas fa-redo"></i> ${t.clearBatch}`;
      elements.batchDownloadBtn.innerHTML = `<i class="fas fa-download"></i> ${t.downloadBatch}`;
      
      // Update decode panel
      document.querySelector('.panel-title i.fa-unlock').parentElement.textContent = t.extractSecret;
      document.querySelector('#stegoUploadContainer .file-upload-text').textContent = t.dragDrop;
      document.querySelector('#stegoUploadContainer .file-upload-hint').textContent = t.supports;
      document.querySelector('label[for="extracted"]').textContent = t.extractedMessage;
      elements.extractedInput.placeholder = t.extractedPlaceholder;
      document.querySelector('label[for="decodeBitDepth"]').textContent = t.bitDepth;
      document.querySelector('label[for="decryptToggle"]').textContent = t.encrypted;
      elements.decryptPassword.placeholder = t.decryptPassword;
      document.querySelector('label[for="decodeEncryptionMethod"]').textContent = t.encryptionMethod;
      document.querySelector('label[for="decompressToggle"]').textContent = t.decompress;
      document.querySelector('label[for="decodeAlgorithm"]').textContent = t.algorithm;
      elements.decodeBtn.innerHTML = `<i class="fas fa-unlock"></i> ${t.extractMessage}`;
      elements.copyBtn.innerHTML = `<i class="fas fa-copy"></i> ${t.copyClipboard}`;
      elements.clearBtn.innerHTML = `<i class="fas fa-trash"></i> ${t.clear}`;
      elements.saveTextBtn.innerHTML = `<i class="fas fa-save"></i> ${t.saveText}`;
      elements.validateBtn.innerHTML = `<i class="fas fa-check"></i> ${t.validateStego}`;
      document.querySelector('#qrContainer .form-label').textContent = t.qrCode;
      elements.downloadQrBtn.innerHTML = `<i class="fas fa-download"></i> ${t.downloadQR}`;
      document.querySelector('#decodeHistory .form-label').textContent = t.recentDecodings;
      document.querySelector('#decodeConsole .form-label').textContent = t.decodingLog;
      
      // Update tabs
      document.querySelector('[data-tab="single"]').textContent = t.singleImage;
      document.querySelector('[data-tab="batch"]').textContent = t.batchProcess;
    }

    // Helper Functions
    function showToast(message, type = 'info', duration = 3000) {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      
      let icon;
      switch(type) {
        case 'success': icon = 'check-circle'; break;
        case 'error': icon = 'times-circle'; break;
        case 'warning': icon = 'exclamation-triangle'; break;
        default: icon = 'info-circle';
      }
      
      toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
      `;
      elements.toastContainer.appendChild(toast);
      
      // Trigger reflow
      void toast.offsetWidth;
      
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, duration);
    }

    function updateCharacterCounts() {
      const text = elements.secretInput.value;
      const charCount = text.length;
      const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      const byteCount = new Blob([text]).size;
      
      elements.charCount.textContent = charCount;
      elements.wordCount.textContent = wordCount;
      elements.byteCount.textContent = byteCount;
    }

    function updateBatchCharacterCounts() {
      const text = elements.batchSecretInput.value;
      const charCount = text.length;
      const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      const byteCount = new Blob([text]).size;
      
      elements.batchCharCount.textContent = charCount;
      elements.batchWordCount.textContent = wordCount;
      elements.batchByteCount.textContent = byteCount;
    }

    function updateExtractedCharacterCounts() {
      const text = elements.extractedInput.value;
      const charCount = text.length;
      const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      const byteCount = new Blob([text]).size;
      
      elements.extractedCharCount.textContent = charCount;
      elements.extractedWordCount.textContent = wordCount;
      elements.extractedByteCount.textContent = byteCount;
    }

    function updateCapacityInfo() {
      if (!state.originalImage) {
        elements.capacityInfo.textContent = '';
        return;
      }
      
      const bitDepth = parseInt(elements.bitDepthSelect.value);
      const width = state.originalImage.width;
      const height = state.originalImage.height;
      
      // Calculate capacity in bits (3 channels per pixel)
      const totalBits = width * height * 3 * bitDepth;
      const totalBytes = Math.floor(totalBits / 8);
      
      // Calculate current message size
      const message = elements.secretInput.value;
      const messageSize = message ? new Blob([message]).size : 0;
      
      // Calculate percentage used
      const percentageUsed = messageSize > 0 ? Math.min(100, Math.round((messageSize / totalBytes) * 100)) : 0;
      
      // Update UI
      const t = state.translations[state.language] || state.translations.en;
      elements.capacityInfo.innerHTML = `
        ${t.imageCapacity}: <strong>${formatBytes(totalBytes)}</strong> 
        | ${t.messageSize}: <strong>${formatBytes(messageSize)}</strong>
        ${messageSize > 0 ? `| <span class="${messageSize > totalBytes ? 'text-danger' : 'text-success'}">${percentageUsed}% Used</span>` : ''}
      `;
      
      if (messageSize > totalBytes) {
        showToast('Warning: Message exceeds image capacity! Some data may be lost.', 'warning');
      }
    }

    function formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function textToBinary(text) {
      return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
    }

    function binaryToText(binary) {
      let result = '';
      for (let i = 0; i < binary.length; i += 8) {
        const byte = binary.substr(i, 8);
        if (byte.length < 8) break; // Incomplete byte at end
        result += String.fromCharCode(parseInt(byte, 2));
      }
      return result;
    }

    function encryptMessage(message, password, method = 'xor') {
      if (method === 'aes') {
        // AES encryption using CryptoJS
        try {
          const encrypted = CryptoJS.AES.encrypt(message, password).toString();
          return encrypted;
        } catch (e) {
          console.error('AES encryption error:', e);
          return message; // Fallback to plain text
        }
      } else {
        // Simple XOR encryption
        let result = '';
        for (let i = 0; i < message.length; i++) {
          const charCode = message.charCodeAt(i) ^ password.charCodeAt(i % password.length);
          result += String.fromCharCode(charCode);
        }
        return result;
      }
    }

    function decryptMessage(message, password, method = 'xor') {
      if (method === 'aes') {
        // AES decryption using CryptoJS
        try {
          const decrypted = CryptoJS.AES.decrypt(message, password).toString(CryptoJS.enc.Utf8);
          return decrypted || message; // Fallback to original if decryption fails
        } catch (e) {
          console.error('AES decryption error:', e);
          return message; // Fallback to original
        }
      } else {
        // XOR decryption is the same as encryption
        return encryptMessage(message, password, 'xor');
      }
    }

    function compressData(data) {
      try {
        // Convert string to Uint8Array
        const encoder = new TextEncoder();
        const uint8Array = encoder.encode(data);
        
        // Compress using pako
        const compressed = pako.deflate(uint8Array);
        
        // Convert to base64 for easier handling
        const base64 = btoa(String.fromCharCode.apply(null, compressed));
        return base64;
      } catch (e) {
        console.error('Compression error:', e);
        return data; // Return original if compression fails
      }
    }

    function decompressData(compressedData) {
      try {
        // Convert base64 back to Uint8Array
        const binaryString = atob(compressedData);
        const uint8Array = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          uint8Array[i] = binaryString.charCodeAt(i);
        }
        
        // Decompress using pako
        const decompressed = pako.inflate(uint8Array);
        
        // Convert back to string
        const decoder = new TextDecoder();
        return decoder.decode(decompressed);
      } catch (e) {
        console.error('Decompression error:', e);
        return compressedData; // Return original if decompression fails
      }
    }

    function updatePasswordStrength() {
      const password = elements.encryptPassword.value;
      const strength = calculatePasswordStrength(password);
      
      // Update strength bar
      const strengthBar = elements.passwordStrengthBar;
      strengthBar.style.width = `${strength.score * 25}%`;
      
      // Update color based on strength
      strengthBar.className = 'password-strength-bar';
      if (strength.score < 2) {
        strengthBar.classList.add('password-strength-weak');
      } else if (strength.score < 3) {
        strengthBar.classList.add('password-strength-medium');
      } else if (strength.score < 4) {
        strengthBar.classList.add('password-strength-strong');
      } else {
        strengthBar.classList.add('password-strength-very-strong');
      }
    }

    function updateBatchPasswordStrength() {
      const password = elements.batchEncryptPassword.value;
      const strength = calculatePasswordStrength(password);
      
      // Update strength bar
      const strengthBar = elements.batchPasswordStrengthBar;
      strengthBar.style.width = `${strength.score * 25}%`;
      
      // Update color based on strength
      strengthBar.className = 'password-strength-bar';
      if (strength.score < 2) {
        strengthBar.classList.add('password-strength-weak');
      } else if (strength.score < 3) {
        strengthBar.classList.add('password-strength-medium');
      } else if (strength.score < 4) {
        strengthBar.classList.add('password-strength-strong');
      } else {
        strengthBar.classList.add('password-strength-very-strong');
      }
    }

    function calculatePasswordStrength(password) {
      let score = 0;
      const suggestions = [];
      
      // Length check
      if (password.length === 0) {
        return { score: 0, suggestions: ['Password cannot be empty'] };
      }
      
      if (password.length < 8) {
        suggestions.push('Consider using at least 8 characters');
      } else {
        score++;
      }
      
      if (password.length >= 12) score++;
      
      // Character variety checks
      if (/[a-z]/.test(password)) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[^a-zA-Z0-9]/.test(password)) score++;
      
      // Common password check (simplified)
      const commonPasswords = ['password', '123456', 'qwerty', 'letmein'];
      if (commonPasswords.includes(password.toLowerCase())) {
        score = 0;
        suggestions.push('Avoid using common passwords');
      }
      
      // Sequential characters check
      if (/(.)\1{2,}/.test(password)) {
        suggestions.push('Avoid repeating characters');
      }
      
      // Limit score to 4
      score = Math.min(4, score);
      
      return { score, suggestions };
    }

    function addToHistory(type, data) {
      const timestamp = new Date().toISOString();
      const historyItem = { type, data, timestamp };
      
      state.history[type].unshift(historyItem); // Add to beginning
      if (state.history[type].length > 10) {
        state.history[type].pop(); // Keep only last 10 items
      }
      
      // Update UI
      renderHistory(type);
      
      // Save to localStorage
      saveHistory();
    }

    function renderHistory(type) {
      const historyContainer = type === 'encode' ? elements.encodeHistory : elements.decodeHistory;
      historyContainer.innerHTML = `<div class="form-label">${type === 'encode' ? 'Recent Encodings' : 'Recent Decodings'}</div>`;
      
      state.history[type].forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        let content = '';
        if (type === 'encode') {
          content = `Hidden ${formatBytes(item.data.messageSize)} in ${item.data.imageSize}`;
        } else {
          const messagePreview = item.data.message.length > 30 ? 
            item.data.message.substring(0, 30) + '...' : item.data.message;
          content = `Extracted: ${messagePreview}`;
        }
        
        historyItem.innerHTML = `
          <div>${content}</div>
          <div class="history-timestamp">${new Date(item.timestamp).toLocaleString()}</div>
        `;
        
        historyItem.addEventListener('click', () => {
          if (type === 'encode') {
            // Load encode history item
            // This would need more implementation to actually restore the state
            showToast('Loading history item...', 'info');
          } else {
            // Load decode history item
            elements.extractedInput.value = item.data.message;
            updateExtractedCharacterCounts();
          }
        });
        
        historyContainer.appendChild(historyItem);
      });
    }

    function saveHistory() {
      try {
        localStorage.setItem('pixelVaultHistory', JSON.stringify(state.history));
      } catch (e) {
        console.error('Failed to save history:', e);
      }
    }

    function loadHistory() {
      try {
        const savedHistory = localStorage.getItem('pixelVaultHistory');
        if (savedHistory) {
          state.history = JSON.parse(savedHistory);
          renderHistory('encode');
          renderHistory('decode');
        }
      } catch (e) {
        console.error('Failed to load history:', e);
      }
    }

    function addConsoleLog(type, message, panel = 'encode') {
      const consoleContainer = panel === 'encode' ? elements.encodeConsole : elements.decodeConsole;
      const logElement = document.createElement('div');
      logElement.className = `console-log console-log-${type}`;
      logElement.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
      consoleContainer.appendChild(logElement);
      consoleContainer.scrollTop = consoleContainer.scrollHeight;
    }

    // Image Handling
    function handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      if (file.size > 10 * 1024 * 1024) {
        showToast('File size exceeds 10MB limit', 'error');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          // Store original image
          state.originalImage = img;
          
          // Display preview
          elements.previewImage.src = e.target.result;
          elements.previewImage.style.display = 'block';
          elements.previewContainer.querySelector('.image-placeholder').style.display = 'none';
          
          // Set up canvas
          elements.canvas.width = img.width;
          elements.canvas.height = img.height;
          const ctx = elements.canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          
          // Also set up original canvas for comparison
          elements.originalCanvas.width = img.width;
          elements.originalCanvas.height = img.height;
          elements.originalCanvas.getContext('2d').drawImage(img, 0, 0);
          
          updateCapacityInfo();
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function handleStegoImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      if (file.size > 10 * 1024 * 1024) {
        showToast('File size exceeds 10MB limit', 'error');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          // Display preview
          elements.stegoPreviewImage.src = e.target.result;
          elements.stegoPreviewImage.style.display = 'block';
          elements.stegoPreviewContainer.querySelector('.image-placeholder').style.display = 'none';
          
          // Set up stego canvas
          elements.stegoCanvas.width = img.width;
          elements.stegoCanvas.height = img.height;
          elements.stegoCanvas.getContext('2d').drawImage(img, 0, 0);
          
          // Store stego image
          state.stegoImage = img;
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function handleTextFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      if (file.size > 1 * 1024 * 1024) {
        showToast('Text file size exceeds 1MB limit', 'error');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        elements.secretInput.value = e.target.result;
        updateCharacterCounts();
        updateCapacityInfo();
      };
      reader.readAsText(file);
    }

    function handleBinaryFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      
      if (file.size > 1 * 1024 * 1024) {
        showToast('Binary file size exceeds 1MB limit', 'error');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = function(e) {
        // Convert binary data to a string representation
        const bytes = new Uint8Array(e.target.result);
        let binaryString = '';
        for (let i = 0; i < bytes.length; i++) {
          binaryString += String.fromCharCode(bytes[i]);
        }
        
        // Encode as base64 to store in textarea
        elements.secretInput.value = `[BINARY FILE:${file.name}]\n` + btoa(binaryString);
        updateCharacterCounts();
        updateCapacityInfo();
      };
      reader.readAsArrayBuffer(file);
    }

    function handleBatchUpload(event) {
      const files = Array.from(event.target.files);
      if (files.length === 0) return;
      
      // Clear previous batch
      state.batchItems = [];
      elements.batchList.innerHTML = '';
      
      // Process each file
      files.forEach((file, index) => {
        if (file.size > 10 * 1024 * 1024) {
          showToast(`File ${file.name} exceeds 10MB limit and will be skipped`, 'warning');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = new Image();
          img.onload = function() {
            const item = {
              file,
              image: img,
              status: 'pending',
              progress: 0
            };
            
            state.batchItems.push(item);
            renderBatchItem(item, index);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      });
      
      showToast(`Added ${files.length} images to batch`, 'info');
    }

    function renderBatchItem(item, index) {
      const batchItem = document.createElement('div');
      batchItem.className = 'batch-item';
      batchItem.innerHTML = `
        <img src="${URL.createObjectURL(item.file)}" class="batch-thumbnail">
        <div>${item.file.name}</div>
        <div class="batch-status">${item.status}</div>
        <div class="batch-progress">
          <div class="batch-progress-bar" style="width: ${item.progress}%"></div>
        </div>
      `;
      
      elements.batchList.appendChild(batchItem);
    }

    // Encoding Functions
    function encodeMessage() {
      if (!state.originalImage) {
        showToast('Please upload an image first', 'error');
        return;
      }
      
      let secretMessage = elements.secretInput.value;
      if (!secretMessage) {
        showToast('Please enter a secret message', 'error');
        return;
      }
      
      const bitDepth = parseInt(elements.bitDepthSelect.value);
      const useEncryption = elements.encryptToggle.checked;
      const password = elements.encryptPassword.value;
      const encryptionMethod = elements.encryptionMethod.value;
      const addWatermark = elements.watermarkToggle.checked;
      const watermarkType = elements.watermarkType.value;
      const watermarkText = elements.watermarkText.value;
      const useCompression = elements.compressToggle.checked;
      const algorithm = elements.algorithm.value;
      
      // Prepare message
      let messageToEncode = secretMessage;
      
      // Add compression if enabled
      if (useCompression) {
        addConsoleLog('info', 'Compressing message data...');
        messageToEncode = compressData(messageToEncode);
        addConsoleLog('info', 'Message compressed successfully');
      }
      
      // Add encryption if enabled
      if (useEncryption) {
        if (!password) {
          showToast('Please enter an encryption password', 'error');
          return;
        }
        addConsoleLog('info', 'Encrypting message...');
        messageToEncode = encryptMessage(messageToEncode, password, encryptionMethod);
        addConsoleLog('info', 'Message encrypted successfully');
      }
      
      // Add delimiter to mark end of message (16 zeros)
      const binaryMsg = textToBinary(messageToEncode) + '0000000000000000';
      
      // Check if message fits
      const width = state.originalImage.width;
      const height = state.originalImage.height;
      const totalBitsAvailable = width * height * 3 * bitDepth;
      
      if (binaryMsg.length > totalBitsAvailable) {
        showToast('Warning: Message is too large for the image. Truncating...', 'warning');
        addConsoleLog('warn', 'Message truncated to fit image capacity');
      }
      
      // Prepare for encoding
      state.modifiedPixels = [];
      elements.encodeProgress.style.display = 'block';
      elements.encodeProgressBar.style.width = '0%';
      elements.encodeConsole.innerHTML = '<div class="form-label">Encoding Log</div>';
      
      // Use setTimeout to allow UI to update before heavy processing
      setTimeout(() => {
        try {
          state.isEncoding = true;
          addConsoleLog('info', 'Starting encoding process...');
          
          // Get image data
          const ctx = elements.canvas.getContext('2d');
          const imgData = ctx.getImageData(0, 0, width, height);
          let data = imgData.data;
          
          // Encode message
          let binIdx = 0;
          const totalBitsToProcess = Math.min(binaryMsg.length, totalBitsAvailable);
          const updateInterval = Math.floor(totalBitsToProcess / 100); // Update progress every 1%
          
          for (let i = 0; i < data.length && binIdx < binaryMsg.length; i += 4) {
            // Skip alpha channel (i+3)
            for (let c = 0; c < 3 && binIdx < binaryMsg.length; c++) {
              // For each bit in the bit depth
              for (let b = 0; b < bitDepth && binIdx < binaryMsg.length; b++) {
                const bit = parseInt(binaryMsg[binIdx++]);
                const mask = 0b11111111 ^ (1 << b); // Mask to clear the b-th bit
                data[i + c] = (data[i + c] & mask) | (bit << b);
              }
              
              // Track modified pixels for debug view
              if (binIdx > 0 && (i + c) % 4 === 0) {
                const x = (i / 4) % width;
                const y = Math.floor((i / 4) / width);
                state.modifiedPixels.push({x, y});
              }
            }
            
            // Update progress
            if (binIdx % updateInterval === 0) {
              const progress = Math.floor((binIdx / totalBitsToProcess) * 100);
              elements.encodeProgressBar.style.width = `${progress}%`;
              addConsoleLog('info', `Encoding progress: ${progress}%`);
            }
          }
          
          // Add watermark if enabled
          if (addWatermark) {
            addConsoleLog('info', 'Adding watermark...');
            if (watermarkType === 'text') {
              addTextWatermark(data, width, height, watermarkText);
            } else if (elements.watermarkPreview.style.display === 'block') {
              addImageWatermark(data, width, height);
            }
            addConsoleLog('info', 'Watermark added successfully');
          }
          
          // Put modified data back
          ctx.putImageData(imgData, 0, 0);
          
          // Create download link
          elements.downloadLink.href = elements.canvas.toDataURL('image/png');
          elements.downloadGroup.style.display = 'flex';
          
          // Store stego image for comparison
          elements.stegoCanvas.width = width;
          elements.stegoCanvas.height = height;
          elements.stegoCanvas.getContext('2d').putImageData(imgData, 0, 0);
          
          // Update UI
          elements.compareBtn.style.display = 'inline-flex';
          elements.encodeProgressBar.style.width = '100%';
          
          // Add to history
          addToHistory('encode', {
            imageSize: `${width}x${height}`,
            messageSize: secretMessage.length,
            timestamp: new Date().toISOString()
          });
          
          addConsoleLog('info', 'Encoding process completed successfully');
          showToast('Message successfully hidden in image!', 'success');
          
          // Show debug view if it was active
          if (elements.debugOverlay.style.display === 'block') {
            showDebugView();
          }
        } catch (error) {
          console.error('Encoding error:', error);
          addConsoleLog('error', `Encoding failed: ${error.message}`);
          showToast('Error encoding message: ' + error.message, 'error');
        } finally {
          state.isEncoding = false;
        }
      }, 100);
    }

    function addTextWatermark(data, width, height, text) {
      // Simple diagonal watermark text
      const ctx = elements.canvas.getContext('2d');
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.textAlign = 'center';
      
      // Add watermark text diagonally across the image
      for (let i = 0; i < 5; i++) {
        const x = width * 0.2 + (width * 0.15 * i);
        const y = height * 0.2 + (height * 0.15 * i);
        ctx.fillText(text, x, y);
      }
    }

    function addImageWatermark(data, width, height) {
      const ctx = elements.canvas.getContext('2d');
      
      // Draw the watermark image in the bottom right corner
      const watermarkWidth = width * 0.2;
      const watermarkHeight = height * 0.2;
      const x = width - watermarkWidth - 10;
      const y = height - watermarkHeight - 10;
      
      ctx.drawImage(elements.watermarkPreview, x, y, watermarkWidth, watermarkHeight);
    }

    function processBatch() {
      if (state.batchItems.length === 0) {
        showToast('No images in batch to process', 'error');
        return;
      }
      
      const secretMessage = elements.batchSecretInput.value;
      if (!secretMessage) {
        showToast('Please enter a secret message for the batch', 'error');
        return;
      }
      
      const bitDepth = parseInt(elements.batchBitDepthSelect.value);
      const useEncryption = elements.batchEncryptToggle.checked;
      const password = elements.batchEncryptPassword.value;
      const encryptionMethod = 'xor'; // Simple XOR for batch to keep it fast
      
      // Prepare message
      let messageToEncode = secretMessage;
      
      // Add encryption if enabled
      if (useEncryption) {
        if (!password) {
          showToast('Please enter an encryption password', 'error');
          return;
        }
        messageToEncode = encryptMessage(messageToEncode, password, encryptionMethod);
      }
      
      // Add delimiter to mark end of message (16 zeros)
      const binaryMsg = textToBinary(messageToEncode) + '0000000000000000';
      
      // Prepare for batch processing
      state.isBatchProcessing = true;
      elements.batchProgress.style.display = 'block';
      elements.batchProgressBar.style.width = '0%';
      
      let processedCount = 0;
      
      // Process each image in the batch
      state.batchItems.forEach((item, index) => {
        setTimeout(() => {
          try {
            const img = item.image;
            const width = img.width;
            const height = img.height;
            
            // Create canvas for this image
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            // Get image data
            const imgData = ctx.getImageData(0, 0, width, height);
            let data = imgData.data;
            
            // Encode message
            let binIdx = 0;
            const totalBitsAvailable = width * height * 3 * bitDepth;
            const totalBitsToProcess = Math.min(binaryMsg.length, totalBitsAvailable);
            
            for (let i = 0; i < data.length && binIdx < binaryMsg.length; i += 4) {
              // Skip alpha channel (i+3)
              for (let c = 0; c < 3 && binIdx < binaryMsg.length; c++) {
                // For each bit in the bit depth
                for (let b = 0; b < bitDepth && binIdx < binaryMsg.length; b++) {
                  const bit = parseInt(binaryMsg[binIdx++]);
                  const mask = 0b11111111 ^ (1 << b); // Mask to clear the b-th bit
                  data[i + c] = (data[i + c] & mask) | (bit << b);
                }
              }
            }
            
            // Put modified data back
            ctx.putImageData(imgData, 0, 0);
            
            // Update item with result
            item.stegoDataUrl = canvas.toDataURL('image/png');
            item.status = 'completed';
            item.progress = 100;
            
            // Update UI
            updateBatchItem(index);
            
            // Update overall progress
            processedCount++;
            const overallProgress = Math.floor((processedCount / state.batchItems.length) * 100);
            elements.batchProgressBar.style.width = `${overallProgress}%`;
            
            if (processedCount === state.batchItems.length) {
              // Batch completed
              state.isBatchProcessing = false;
              elements.batchDownloadGroup.style.display = 'flex';
              showToast('Batch processing completed!', 'success');
            }
          } catch (error) {
            console.error('Batch item error:', error);
            item.status = 'failed: ' + error.message;
            item.progress = 0;
            updateBatchItem(index);
            showToast(`Error processing ${item.file.name}`, 'error');
          }
        }, 0);
      });
    }

    function updateBatchItem(index) {
      const item = state.batchItems[index];
      const batchItems = elements.batchList.querySelectorAll('.batch-item');
      
      if (batchItems[index]) {
        batchItems[index].querySelector('.batch-status').textContent = item.status;
        batchItems[index].querySelector('.batch-progress-bar').style.width = `${item.progress}%`;
      }
    }

    // Decoding Functions
    function decodeMessage() {
      if (!state.stegoImage) {
        showToast('Please upload a stego image first', 'error');
        return;
      }
      
      const bitDepth = parseInt(elements.decodeBitDepthSelect.value);
      const useDecryption = elements.decryptToggle.checked;
      const password = elements.decryptPassword.value;
      const encryptionMethod = elements.decodeEncryptionMethod.value;
      const useDecompression = elements.decompressToggle.checked;
      const algorithm = elements.decodeAlgorithm.value;
      
      // Prepare for decoding
      elements.decodeProgress.style.display = 'block';
      elements.decodeProgressBar.style.width = '0%';
      elements.qrContainer.style.display = 'none';
      elements.decodeConsole.innerHTML = '<div class="form-label">Decoding Log</div>';
      
      // Use setTimeout to allow UI to update before heavy processing
      setTimeout(() => {
        try {
          state.isDecoding = true;
          addConsoleLog('info', 'Starting decoding process...', 'decode');
          
          const width = state.stegoImage.width;
          const height = state.stegoImage.height;
          const ctx = elements.stegoCanvas.getContext('2d');
          const imgData = ctx.getImageData(0, 0, width, height);
          const data = imgData.data;
          
          let binary = '';
          const totalBitsToProcess = width * height * 3 * bitDepth;
          const updateInterval = Math.floor(totalBitsToProcess / 100); // Update progress every 1%
          let bitsProcessed = 0;
          
          // Extract bits from image
          for (let i = 0; i < data.length; i += 4) {
            // Skip alpha channel (i+3)
            for (let c = 0; c < 3; c++) {
              // For each bit in the bit depth
              for (let b = 0; b < bitDepth; b++) {
                binary += (data[i + c] >> b) & 1;
                bitsProcessed++;
                
                // Check for delimiter (16 zeros)
                if (binary.length >= 16) {
                  const last16 = binary.substr(binary.length - 16);
                  if (last16 === '0000000000000000') {
                    // Found delimiter, stop processing
                    i = data.length; // break outer loop
                    c = 3; // break channel loop
                    b = bitDepth; // break bit depth loop
                  }
                }
              }
            }
            
            // Update progress
            if (bitsProcessed % updateInterval === 0) {
              const progress = Math.floor((bitsProcessed / totalBitsToProcess) * 100);
              elements.decodeProgressBar.style.width = `${progress}%`;
              addConsoleLog('info', `Decoding progress: ${progress}%`, 'decode');
            }
          }
          
          // Remove the delimiter
          binary = binary.replace(/0000000000000000$/, '');
          
          // Convert binary to text
          let message = binaryToText(binary);
          
          // Decrypt if enabled
          if (useDecryption) {
            if (!password) {
              showToast('Please enter a decryption password', 'error');
              return;
            }
            addConsoleLog('info', 'Decrypting message...', 'decode');
            message = decryptMessage(message, password, encryptionMethod);
            addConsoleLog('info', 'Message decrypted successfully', 'decode');
          }
          
          // Decompress if enabled
          if (useDecompression) {
            try {
              addConsoleLog('info', 'Decompressing message...', 'decode');
              message = decompressData(message);
              addConsoleLog('info', 'Message decompressed successfully', 'decode');
            } catch (e) {
              addConsoleLog('warn', 'Decompression failed, using original message', 'decode');
            }
          }
          
          // Update UI
          elements.extractedInput.value = message;
          elements.decodeProgressBar.style.width = '100%';
          updateExtractedCharacterCounts();
          
          // Generate QR code if message is not too long
          if (message.length > 0 && message.length < 1000) {
            generateQRCode(message);
            elements.qrContainer.style.display = 'block';
          }
          
          // Add to history
          addToHistory('decode', {
            message,
            timestamp: new Date().toISOString()
          });
          
          addConsoleLog('info', 'Decoding process completed successfully', 'decode');
          showToast('Message successfully extracted!', 'success');
        } catch (error) {
          console.error('Decoding error:', error);
          addConsoleLog('error', `Decoding failed: ${error.message}`, 'decode');
          showToast('Error decoding message: ' + error.message, 'error');
        } finally {
          state.isDecoding = false;
        }
      }, 100);
    }

    function generateQRCode(text) {
      QRCode.toCanvas(elements.qrCode, text, { width: 150 }, (error) => {
        if (error) {
          console.error('QR code error:', error);
          showToast('Error generating QR code', 'error');
        }
      });
    }

    function validateStegoImage() {
      if (!state.stegoImage) {
        showToast('Please upload a stego image first', 'error');
        return;
      }
      
      showToast('Validating stego image...', 'info');
      
      // Simple validation - check if the image has modified LSBs
      const width = state.stegoImage.width;
      const height = state.stegoImage.height;
      const ctx = elements.stegoCanvas.getContext('2d');
      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;
      
      let modifiedBits = 0;
      let totalBits = width * height * 3; // 3 channels per pixel
      
      // Check only LSB (bit depth 1)
      for (let i = 0; i < data.length; i += 4) {
        // Skip alpha channel (i+3)
        for (let c = 0; c < 3; c++) {
          if ((data[i + c] & 1) !== 0) {
            modifiedBits++;
          }
        }
      }
      
      const modificationPercentage = (modifiedBits / totalBits) * 100;
      
      if (modificationPercentage > 5) {
        showToast(`This image likely contains hidden data (${modificationPercentage.toFixed(2)}% modified bits)`, 'success');
      } else if (modificationPercentage > 1) {
        showToast(`This image might contain hidden data (${modificationPercentage.toFixed(2)}% modified bits)`, 'info');
      } else {
        showToast(`No significant hidden data detected (${modificationPercentage.toFixed(2)}% modified bits)`, 'warning');
      }
    }

    // UI Functions
    function toggleComparison() {
      if (elements.comparisonSlider.style.display === 'block') {
        elements.comparisonSlider.style.display = 'none';
        elements.previewContainer.style.display = 'flex';
        elements.compareBtn.innerHTML = '<i class="fas fa-exchange-alt"></i> Compare';
      } else {
        // Set up comparison images
        elements.beforeImage.src = elements.originalCanvas.toDataURL('image/png');
        elements.afterImage.src = elements.stegoCanvas.toDataURL('image/png');
        
        elements.comparisonSlider.style.display = 'block';
        elements.previewContainer.style.display = 'none';
        elements.compareBtn.innerHTML = '<i class="fas fa-image"></i> Original';
      }
    }

    function toggleDebugView() {
      if (elements.debugOverlay.style.display === 'block') {
        elements.debugOverlay.style.display = 'none';
        elements.debugColorPicker.style.display = 'none';
        elements.debugBtn.innerHTML = '<i class="fas fa-bug"></i> Debug View';
      } else {
        showDebugView();
        elements.debugColorPicker.style.display = 'flex';
        elements.debugBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Debug';
      }
    }

    function showDebugView() {
      if (!state.modifiedPixels.length) return;
      
      elements.debugOverlay.innerHTML = '';
      elements.debugOverlay.style.display = 'block';
      
      // Get image dimensions and scale
      const imgRect = elements.previewImage.getBoundingClientRect();
      const scaleX = imgRect.width / state.originalImage.width;
      const scaleY = imgRect.height / state.originalImage.height;
      
      // Mark modified pixels
      state.modifiedPixels.forEach(pixel => {
        const dot = document.createElement('div');
        dot.className = 'modified-pixel';
        dot.style.left = `${pixel.x * scaleX}px`;
        dot.style.top = `${pixel.y * scaleY}px`;
        dot.style.backgroundColor = state.debugColor;
        elements.debugOverlay.appendChild(dot);
      });
    }

    function copyToClipboard() {
      if (!elements.extractedInput.value) {
        showToast('No message to copy', 'error');
        return;
      }
      
      elements.extractedInput.select();
      document.execCommand('copy');
      
      // Show feedback
      const selection = window.getSelection();
      if (selection) selection.removeAllRanges();
      
      showToast('Message copied to clipboard!', 'success');
      
      // Clear clipboard after 30 seconds for security
      setTimeout(() => {
        navigator.clipboard.writeText('').catch(() => {});
      }, 30000);
    }

    function saveAsTextFile() {
      if (!elements.extractedInput.value) {
        showToast('No message to save', 'error');
        return;
      }
      
      const blob = new Blob([elements.extractedInput.value], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.download = 'extracted-message.txt';
      link.href = url;
      link.click();
      
      // Clean up
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
    }

    function saveAsZip() {
      if (!state.originalImage || !state.stegoImage) {
        showToast('No stego image to save', 'error');
        return;
      }
      
      const zip = new JSZip();
      
      // Add original image
      zip.file('original-image.png', elements.originalCanvas.toDataURL('image/png').split(',')[1], { base64: true });
      
      // Add stego image
      zip.file('stego-image.png', elements.stegoCanvas.toDataURL('image/png').split(',')[1], { base64: true });
      
      // Add secret message if available
      if (elements.secretInput.value) {
        zip.file('secret-message.txt', elements.secretInput.value);
      }
      
      // Generate zip file
      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, 'pixelvault-stego.zip');
        showToast('Project saved as ZIP file!', 'success');
      });
    }

    function downloadBatchAsZip() {
      if (state.batchItems.length === 0) {
        showToast('No batch items to download', 'error');
        return;
      }
      
      const zip = new JSZip();
      let addedCount = 0;
      
      state.batchItems.forEach((item, index) => {
        if (item.status === 'completed' && item.stegoDataUrl) {
          const filename = item.file.name.replace(/\.[^/.]+$/, '') + '-stego.png';
          zip.file(filename, item.stegoDataUrl.split(',')[1], { base64: true });
          addedCount++;
        }
      });
      
      if (addedCount === 0) {
        showToast('No completed items to download', 'error');
        return;
      }
      
      // Generate zip file
      zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, 'pixelvault-batch-stego.zip');
        showToast(`Downloaded ${addedCount} stego images as ZIP!`, 'success');
      });
    }

    function downloadQRCode() {
      if (!elements.qrCode.firstChild) {
        showToast('No QR code to download', 'error');
        return;
      }
      
      const link = document.createElement('a');
      link.download = 'pixelvault-qrcode.png';
      link.href = elements.qrCode.firstChild.toDataURL('image/png');
      link.click();
    }

    function resetEncodePanel() {
      // Reset image
      state.originalImage = null;
      elements.previewImage.src = '';
      elements.previewImage.style.display = 'none';
      elements.previewContainer.querySelector('.image-placeholder').style.display = 'flex';
      
      // Reset form
      elements.secretInput.value = '';
      elements.bitDepthSelect.value = '1';
      elements.encryptToggle.checked = false;
      elements.passwordGroup.style.display = 'none';
      elements.encryptPassword.value = '';
      elements.watermarkToggle.checked = false;
      elements.watermarkTextGroup.style.display = 'none';
      elements.watermarkImageGroup.style.display = 'none';
      elements.watermarkPreview.style.display = 'none';
      elements.watermarkPreview.src = '';
      elements.compressToggle.checked = true;
      elements.algorithm.value = 'lsb';
      
      // Reset UI elements
      elements.encodeProgress.style.display = 'none';
      elements.encodeProgressBar.style.width = '0%';
      elements.downloadGroup.style.display = 'none';
      elements.compareBtn.style.display = 'none';
      elements.comparisonSlider.style.display = 'none';
      elements.previewContainer.style.display = 'flex';
      elements.debugOverlay.style.display = 'none';
      elements.debugColorPicker.style.display = 'none';
      elements.debugBtn.innerHTML = '<i class="fas fa-bug"></i> Debug View';
      
      // Reset canvas
      elements.canvas.width = 0;
      elements.canvas.height = 0;
      elements.originalCanvas.width = 0;
      elements.originalCanvas.height = 0;
      elements.stegoCanvas.width = 0;
      elements.stegoCanvas.height = 0;
      
      // Reset state
      state.modifiedPixels = [];
      
      // Update capacity info
      updateCapacityInfo();
      updateCharacterCounts();
      
      showToast('Encode panel reset', 'info');
    }

    function resetBatchPanel() {
      state.batchItems = [];
      elements.batchList.innerHTML = '';
      elements.batchSecretInput.value = '';
      elements.batchBitDepthSelect.value = '1';
      elements.batchEncryptToggle.checked = false;
      elements.batchPasswordGroup.style.display = 'none';
      elements.batchEncryptPassword.value = '';
      elements.batchProgress.style.display = 'none';
      elements.batchProgressBar.style.width = '0%';
      elements.batchDownloadGroup.style.display = 'none';
      
      updateBatchCharacterCounts();
      showToast('Batch panel cleared', 'info');
    }

    function clearDecodePanel() {
      // Reset image
      state.stegoImage = null;
      elements.stegoPreviewImage.src = '';
      elements.stegoPreviewImage.style.display = 'none';
      elements.stegoPreviewContainer.querySelector('.image-placeholder').style.display = 'flex';
      
      // Reset form
      elements.extractedInput.value = '';
      elements.decodeBitDepthSelect.value = '1';
      elements.decryptToggle.checked = false;
      elements.decryptPasswordGroup.style.display = 'none';
      elements.decryptPassword.value = '';
      elements.decodeEncryptionMethod.value = 'xor';
      elements.decompressToggle.checked = true;
      elements.decodeAlgorithm.value = 'lsb';
      
      // Reset UI elements
      elements.decodeProgress.style.display = 'none';
      elements.decodeProgressBar.style.width = '0%';
      elements.qrContainer.style.display = 'none';
      elements.qrCode.innerHTML = '';
      
      // Reset canvas
      elements.stegoCanvas.width = 0;
      elements.stegoCanvas.height = 0;
      
      updateExtractedCharacterCounts();
      showToast('Decode panel cleared', 'info');
    }

    // Initialize the app
    init();