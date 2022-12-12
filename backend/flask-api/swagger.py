from flask_swagger_ui import get_swaggerui_blueprint

SWAGGER_URL = '/swagger'
SWAGGER_PATH = '/docs/openapi.yaml'

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    SWAGGER_PATH,
    config={
        'app_name': "Scrum Board REST API"
    }
)