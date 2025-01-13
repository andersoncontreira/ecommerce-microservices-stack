{{- define "store.name" -}}
{{- .Chart.Name -}}
{{- end -}}
{{- define "store.fullname" -}}
{{/*{{- printf "%s-%s" .Chart.Name .Release.Name -}}*/}}
{{- .Release.Name -}}
{{- end -}}
{{- define "store.chart" -}}
{{- "store-chat" -}}
{{- end -}}
